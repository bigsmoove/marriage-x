import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFreePDFEmail = async (email: string, name: string, downloadToken: string) => {
  const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/download/${downloadToken}`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'The Marriage Corner <noreply@themarriagecorner.com>',
      to: [email],
      subject: 'Your Free Guide: 10 Ways to Revitalize Your Marriage',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Hi ${name}! 👋</h1>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for downloading our free guide! You're about to discover 10 powerful ways 
            to revitalize your marriage and strengthen your relationship.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${downloadUrl}" 
               style="background-color: #4F46E5; color: white; padding: 15px 30px; 
                      text-decoration: none; border-radius: 5px; display: inline-block; 
                      font-weight: bold;">
              Download Your Free Guide
            </a>
          </div>
          
          <p style="font-size: 14px; color: #666;">
            This download link will expire in 48 hours.
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          
          <h3 style="color: #333;">Want Even More?</h3>
          <p style="font-size: 16px; line-height: 1.6;">
            This free guide is just the beginning! Our full "25 Ways to Revitalize Your Marriage" 
            guide includes 15 additional strategies, worksheets, and action plans to help you 
            create the marriage of your dreams.
          </p>
          
          <p style="font-size: 16px;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}?upgrade=true" 
               style="color: #4F46E5;">
              Get the Full Guide for just $9.99 →
            </a>
          </p>
          
          <p style="font-size: 14px; color: #666; margin-top: 30px;">
            Best,<br />
            Chuck from The Marriage Corner<br />
            <a href="https://x.com/Marriage_Corner" style="color: #4F46E5;">@Marriage_Corner</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const sendPremiumPDFEmail = async (email: string, downloadToken: string) => {
  const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/download/${downloadToken}`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'The Marriage Corner <noreply@themarriagecorner.com>',
      to: [email],
      subject: 'Your Purchase: 25 Ways to Revitalize Your Marriage',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank You for Your Purchase! 🎉</h1>
          
          <p style="font-size: 16px; line-height: 1.6;">
            You now have access to the complete "25 Ways to Revitalize Your Marriage" guide. 
            This comprehensive resource will help you build a stronger, more fulfilling relationship.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${downloadUrl}" 
               style="background-color: #4F46E5; color: white; padding: 15px 30px; 
                      text-decoration: none; border-radius: 5px; display: inline-block; 
                      font-weight: bold;">
              Download Your Full Guide
            </a>
          </div>
          
          <p style="font-size: 14px; color: #666;">
            This download link will expire in 48 hours. Please save your PDF for future reference.
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          
          <h3 style="color: #333;">What's Inside:</h3>
          <ul style="font-size: 16px; line-height: 1.8;">
            <li>25 actionable strategies to strengthen your marriage</li>
            <li>Worksheets and reflection exercises</li>
            <li>Real-world examples and scenarios</li>
            <li>Action plans you can implement today</li>
          </ul>
          
          <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
            If you have any questions or feedback, I'd love to hear from you!
          </p>
          
          <p style="font-size: 14px; color: #666; margin-top: 30px;">
            Best,<br />
            Chuck from The Marriage Corner<br />
            <a href="https://x.com/Marriage_Corner" style="color: #4F46E5;">@Marriage_Corner</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

