'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, User, Mail, Phone, FileText, Upload, CheckCircle } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';
import { useDropzone } from 'react-dropzone';

const appointmentSchema = z.object({
  firstName: z.string().min(2, 'שם פרטי חייב להכיל לפחות 2 תווים'),
  lastName: z.string().min(2, 'שם משפחה חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().min(9, 'מספר טלפון לא תקין'),
  idNumber: z.string().min(9, 'תעודת זהות חייבת להכיל 9 ספרות'),
  service: z.string().min(1, 'אנא בחר שירות'),
  date: z.string().min(1, 'אנא בחר תאריך'),
  time: z.string().min(1, 'אנא בחר שעה'),
  notes: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function BookAppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: (acceptedFiles) => {
      setUploadedFiles((prev) => [...prev, ...acceptedFiles]);
    },
  });

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      uploadedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      const response = await fetch('/api/appointments', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to book appointment');

      setIsSuccess(true);
    } catch (error) {
      console.error('Booking error:', error);
      alert('אירעה שגיאה בקביעת התור. אנא נסה שוב או צור קשר טלפונית.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
          <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center" dir="rtl">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                התור נקבע בהצלחה!
              </h2>
              <p className="text-gray-600 mb-6">
                קיבלת אישור במייל ובהודעת SMS. נתראה בקרוב!
              </p>
              <a href="/" className="btn-primary inline-block">
                חזרה לדף הבית
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12" dir="rtl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              קביעת תור
            </h1>
            <p className="text-xl text-gray-600">
              מלא את הפרטים ונחזור אליך בהקדם
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" dir="rtl">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 border-b pb-3">
                  פרטים אישיים
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם פרטי *
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        {...register('firstName')}
                        type="text"
                        className="input-field pr-10"
                        placeholder="שם פרטי"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם משפחה *
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        {...register('lastName')}
                        type="text"
                        className="input-field pr-10"
                        placeholder="שם משפחה"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל *
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        {...register('email')}
                        type="email"
                        className="input-field pr-10"
                        placeholder="example@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        {...register('phone')}
                        type="tel"
                        className="input-field pr-10"
                        placeholder="050-1234567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תעודת זהות *
                  </label>
                  <input
                    {...register('idNumber')}
                    type="text"
                    className="input-field"
                    placeholder="123456789"
                    maxLength={9}
                  />
                  {errors.idNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.idNumber.message}</p>
                  )}
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 border-b pb-3">
                  פרטי התור
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    סוג שירות *
                  </label>
                  <select {...register('service')} className="input-field">
                    <option value="">בחר שירות</option>
                    {doctorConfig.services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תאריך *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        {...register('date')}
                        type="date"
                        min={minDate}
                        className="input-field pr-10"
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שעה *
                    </label>
                    <div className="relative">
                      <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <select {...register('time')} className="input-field pr-10">
                        <option value="">בחר שעה</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    הערות נוספות
                  </label>
                  <textarea
                    {...register('notes')}
                    rows={4}
                    className="input-field"
                    placeholder="תאר את הסיבה לביקור, תסמינים, או מידע נוסף שחשוב לנו לדעת..."
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 border-b pb-3">
                  העלאת מסמכים (אופציונלי)
                </h2>
                <p className="text-sm text-gray-600">
                  ניתן להעלות תוצאות בדיקות, תמונות, או מסמכים רפואיים נוספים (PDF, JPG, PNG - עד 10MB)
                </p>

                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-300 hover:border-primary-400'
                  }`}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  {isDragActive ? (
                    <p className="text-primary-600 font-medium">שחרר את הקבצים כאן...</p>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-2">גרור קבצים לכאן או לחץ לבחירה</p>
                      <p className="text-sm text-gray-500">PDF, JPG, PNG - עד 10MB לקובץ</p>
                    </>
                  )}
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">קבצים שנבחרו:</p>
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-reverse space-x-3">
                          <FileText className="h-5 w-5 text-primary-600" />
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          הסר
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'שולח...' : 'אשר קביעת תור'}
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                לאחר קביעת התור תקבל אישור במייל ובהודעת SMS
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
