import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const appointmentData = {
      id: uuidv4(),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      idNumber: formData.get('idNumber'),
      service: formData.get('service'),
      date: formData.get('date'),
      time: formData.get('time'),
      notes: formData.get('notes') || '',
      createdAt: new Date().toISOString(),
      files: [] as string[],
      status: 'pending',
    };

    // Process uploaded files
    const files: File[] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('file') && value instanceof File) {
        files.push(value);
      }
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'uploads', appointmentData.id);
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Save files
    for (const file of files) {
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name}`;
        const filepath = join(uploadsDir, filename);
        
        await writeFile(filepath, buffer);
        appointmentData.files.push(filename);
      }
    }

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Send SMS notification
    // 4. Integrate with calendar system
    
    // For now, save to JSON file (temporary storage)
    const dataDir = join(process.cwd(), 'data');
    try {
      await mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    const dataFile = join(dataDir, 'appointments.json');
    let appointments = [];
    
    try {
      const { readFile } = await import('fs/promises');
      const existingData = await readFile(dataFile, 'utf-8');
      appointments = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist yet
    }

    appointments.push(appointmentData);
    await writeFile(dataFile, JSON.stringify(appointments, null, 2));

    // Here you would send confirmation email and SMS
    console.log('New appointment booked:', appointmentData);

    return NextResponse.json({
      success: true,
      appointmentId: appointmentData.id,
      message: 'Appointment booked successfully',
    });
  } catch (error) {
    console.error('Appointment booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}

// GET endpoint for retrieving appointments (for doctor dashboard - Phase 2)
export async function GET(request: NextRequest) {
  try {
    const { readFile } = await import('fs/promises');
    const dataFile = join(process.cwd(), 'data', 'appointments.json');
    
    try {
      const data = await readFile(dataFile, 'utf-8');
      const appointments = JSON.parse(data);
      
      // In production, this would require authentication
      // For now, return all appointments
      return NextResponse.json({ appointments });
    } catch (error) {
      return NextResponse.json({ appointments: [] });
    }
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}
