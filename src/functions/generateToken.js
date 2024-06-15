export function generateAccessToken(){
    let token = '';
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()";
    for(let i = 0; i<16;i++){
      token+=keys.charAt(Math.floor(Math.random()*keys.length));
    }
    console.log(token);
    return token
  }