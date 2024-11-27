import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        const { data, error } = await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: email,
          subject: "TrueFeedback | Verification Code",
          react: VerificationEmail({ username, otp: verifyCode}),
        });

        console.log("inside helper, to sendVerificationEmail file", data)
        console.log("This is error we've got while sending email", error)

        return { success: true, message: "Verification email sent successfully" };
    } catch (emailError) {
        console.error("Error while sending verification email", emailError)

        return {success: false, message: "Failed to send verification email"}
    }
}