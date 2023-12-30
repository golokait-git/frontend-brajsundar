import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});


export async function POST(req) {
    try {
        const { name, email, phoneno, book } = await req.json();
        let date = new Date();
        const mailOptions = {
            from: `Preorder Response <${process.env.MAIL_USERNAME}>`,
            to: process.env.MAIL_USERNAME,
            subject: `Preorder Response - ${book}`,
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Preorder Response</title> 
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
            
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
            
                    th {
                        background-color: #f2f2f2;
                    }
            
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Preorder Response</h1> <!-- Added title above the table -->
                <table>
                    <tr>
                        <th>Name</th>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>${phoneno}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>${email}</td>
                    </tr>
                    <tr>
                    <th>Book</th>
                    <td>${book}</td>
                    </tr>
                    <tr>
                    <th>Timestamp</th>
                    <td>${date}</td>
                </tr>
                </table>
            </body>
            </html>
            `
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Contact Mail Sent Successfully" });

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Mail Send Failed!" });
    }

}