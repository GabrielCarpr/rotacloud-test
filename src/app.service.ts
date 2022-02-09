import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <!doctype html>
    <html>
    <head>
      <style>
        body {
          font-family: sans-serif;
          max-width: 720px;
          margin: 0 auto;
        }

        i {
          display: inline-block;
          margin-top: 2px;
          padding: 3px;
          background-color: #f0f0f0;
        }
      </style>
    </head>
    <body>
      <h1>👋 We need your help!</h1><p>This project was left in a non-working and unfinished state and we need your help to get this <a href="/users" target="_blank">endpoint</a> fixed! 😇</p>
      <p>Your task is to ensure a request to <i>/users</i> returns an array of users from <i>users.service.ts</i>.</p>
      
      <h2>🎯 What we need from you</h2>
      <ul>
        <li>Correct TypeScript type annotations</li>
        <li>A <i>/users</i> endpoint accessible via a HTTP <b>GET</b> method which responds with an array of alphabetically sorted users (first then last name)</li>
        <li>Use the <i>getUsers()</i> method in <i>users.service.ts</i> to get the array of users</li>
        <li>You should give us (david@rotacloud.com, jonathan@rotacloud.com) access to a git repository on <a href="https://github.com" target="_blank">GitHub</a> where we can see a commit history and access your solution</li>
      </ul>
      <p><b>Note:</b> You might also like to add comments to the code to mention areas that might need improvement in the future as the app grows. This will help demonstrate your understanding of scalability.</p>

      <h2>🤓 How we'll test it</h2>
      <p>We'll clone your repository and execute 'nest start' to make sure the endpoint is working and returning data as we've specified.</p>
      <p>We'll look through your code to see what changes or additions you've made and how your code is structured.</p>
    </body>
    </html>
    `;
  }
}
