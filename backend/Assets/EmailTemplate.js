function generateEmailContent(user) {
  const htmlContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<html lang="en">

  <head></head>
  <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Join bukinoshita on Vercel<div></div>
  </div>

  <body style="margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;background-color:rgb(255,255,255);font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;">
    <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:40px;width:465px;border-radius:0.25rem;border-width:1px;border-style:solid;border-color:rgb(234,234,234);padding:20px">
      <tr style="width:100%">
        <td>
          <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" style="margin-top:32px">
            <tbody>
              <tr>
              
              <img src="./logoPng.png" alt="" /> 
              </tr>
            </tbody>
          </table>
          <h1 style="margin-left:0px;margin-right:0px;margin-top:30px;margin-bottom:30px;padding:0px;text-align:center;font-size:24px;font-weight:400;color:rgb(0,0,0)">Welcome to <strong>Starlabs</strong></h1>
          <p style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">Hello <strong>${user}</storng>,</p>
          <p style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">You are now officialy accepted at Starlabs as a developer </p>
          <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
            <tbody>
              <tr>
                <td>
                  <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                    <tbody style="width:100%">
                      <tr style="width:100%">
                        <td align="right"><img src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-user.png" width="64" height="64" style="display:block;outline:none;border:none;text-decoration:none;border-radius:9999px" /></td>
                        <td align="center"><img alt="invited you to" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-arrow.png" width="12" height="9" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                        <td align="left"><img src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-team.png" width="64" height="64" style="display:block;outline:none;border:none;text-decoration:none;border-radius:9999px" /></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" style="margin-bottom:32px;margin-top:32px;text-align:center">
            <tbody>
              <tr>
                <td><a href="http://127.0.0.1:5173/" target="_blank" style="p-x:20px;p-y:12px;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;padding:12px 20px;border-radius:0.25rem;background-color:rgb(0,0,0);text-align:center;font-size:12px;font-weight:600;color:rgb(255,255,255);text-decoration-line:none"><span></span><span style="p-x:20px;p-y:12px;max-width:100%;display:inline-block;line-height:120%;text-decoration:none;text-transform:none;mso-padding-alt:0px;mso-text-raise:9px">Join the team</span><span></span></a></td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">or copy and paste this URL into your browser: <a target="_blank" style="color:rgb(37,99,235);text-decoration:none;text-decoration-line:none" href="http://127.0.0.1:5173/">http://127.0.0.1:5173/</a></p>
          <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin-left:0px;margin-right:0px;margin-top:26px;margin-bottom:26px;border-width:1px;border-style:solid;border-color:rgb(234,234,234)" />
          <p style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(102,102,102)">This invitation was intended for <span style="color:rgb(0,0,0)">${user} </span>.This invite was sent from <span style="color:rgb(0,0,0)">204.13.186.218</span> located in <span style="color:rgb(0,0,0)">Prishtina</span>. If you were not expecting this invitation, you can ignore this email. If you are concerned about your account&#x27;s safety, please reply to this email to get in touch with us.</p>
        </td>
      </tr>
    </table>
  </body>

</html>`;

  return htmlContent;
}

module.exports = generateEmailContent;
