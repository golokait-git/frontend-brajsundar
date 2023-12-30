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
        const { firstname, lastname, address, pincode, city, quantity, book, country, phoneno, state } = await req.json();
        let date = new Date();
        const mailOptions = {
            from: `Bulk Order Response <${process.env.MAIL_USERNAME}>`,
            to: process.env.MAIL_USERNAME,
            subject: `Bulk Order Response From ${firstname}`,
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bulk Order Response</title> 
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
                <h1>Bulk Order Response</h1>
                <table>
                <table>
                <tr>
                    <th>First Name</th>
                    <td>${firstname}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>${lastname}</td>
                </tr>
                <tr>
                <th>Phone Number</th>
                <td>${phoneno}</td>
            </tr>
                <tr>
                    <th>Address</th>
                    <td>${address}</td>
                </tr>
                <tr>
                    <th>Pincode</th>
                    <td>${pincode}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>${city}</td>
                </tr>
               
                <tr>
                    <th>Country</th>
                    <td>${country}</td>
                </tr>
               
                <tr>
                    <th>State</th>
                    <td>${state}</td>
                </tr>
                <tr>
                <th>Book Quantity</th>
                <td>${quantity}</td>
            </tr>
            <tr>
                <th>Book Title</th>
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
        return NextResponse.json({ message: "Bulk Order Mail Sent Successfully" });

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Mail Send Failed!" });
    }

}