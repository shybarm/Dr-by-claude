import { NextRequest, NextResponse } from 'next/server';
import { doctorConfig } from '@/lib/data/doctor-config';

export async function POST(request: NextRequest) {
  try {
    const { messages, newMessage } = await request.json();

    // Build conversation context
    const conversationHistory = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Add system prompt
    const systemMessage = {
      role: 'system',
      content: doctorConfig.chatbot.systemPrompt,
    };

    // Add new user message
    conversationHistory.push({
      role: 'user',
      content: newMessage,
    });

    // Call OpenAI-compatible API (you'll need to set your API key)
    const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemMessage.content,
        messages: conversationHistory,
      }),
    });

    if (!apiResponse.ok) {
      throw new Error('API request failed');
    }

    const data = await apiResponse.json();
    const response = data.content[0].text;

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Fallback response if API fails
    const fallbackResponses = [
      'אשמח לעזור! אנא שלח לי מספר טלפון או קבע תור ישירות דרך הכפתור למעלה.',
      'לשאלות רפואיות ספציפיות, אני ממליץ לקבוע תור עם ד"ר גולדהבר. האם תרצה לקבוע תור?',
      'תודה על פנייתך. לשירות מהיר יותר, אתה יכול להתקשר ישירות למרפאה או לקבוע תור אונליין.',
    ];
    
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    
    return NextResponse.json({ response: randomResponse });
  }
}
