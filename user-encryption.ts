import { generateKeyPairSync, publicEncrypt, constants, privateDecrypt } from "crypto";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const apiEncryptionPrivateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxrU+CAzePLYV4
2kCBbMGmrOYHb5uAZgCilOhLc07aqBFCJnsJB5ho/mW9ghb7YHSshcSWTGQZ+xGV
43pl8sojiOcCEHw8okxMznRLnpH1mBSRVFTW/Oh1qAXB/LRPW7IT7hju5bcNEIfV
ixOj6uwrt4hIf0LKX2rZwEs2YfJLFQNCWI5yZ8/bH5QYfhVAiUboUA1srXyQcSZb
pHQqzZo7ACF5vdQZmksnBWBsEsGLEHzFACfdFLbfEerhsETsT33jkDndu4uwGoAA
gJ7cZbTUeTMaKrTTbECUax8TJLozkbhaK5EhR3jtyV/qr1DUpQTBSwaVJWyuovuq
n5fPxJgjAgMBAAECggEACGql0ApX+OvWnUV1dcwRllQtZ1/FlXz/fbQhFuXk792z
R5dsD57w/NREPIhrj0ff7wY9LEN9IG/wwtFuTGMGaU2EZ+ghAnxLsf27q5Nc5a3p
F4NPq4l6d4xYjXprjjDRTDlkq/hsxe0pChgW+5ZWzrFYftqsbsq7VIpT5cUZBa5q
TpkTNIRTrpdgfH0CV5RKJ5YnNq5K9V7Iu8/m9bzDMgOPOXi49pJyqBu3OIgqqXLy
awW2i61u/VhAgs1ONwA24jURwepGdpgyS9ZiYP5qni5tLtkxvnm0LvlYtWSkqT4a
+KrY673MVBZl36NPOYvL9ecQWukQbE80ElAKnCektQKBgQDuet+dCbwAzk91gumn
a6okUgaHkA4mXr9pMYpCBPnOO1efvNheAiDJPLJPKpfnIkB9UGTWDiYmw4lu0nmj
5vhkDo4mW/gAFY+vvU3b8C/1qMxDCvQ4KmlmpWzlpZ1jLUY22sBQRPuf9uhHsj/K
uji6vBGPsExtF6Z3VPaz4uaVDwKBgQC+uugoZxoK7GalQQ7GGUMZhszmUEX6kQpV
qwTQ6jCSK7ZsS6P+IMJCqcShVfsQXt3x2hr2qCK/NgY/28XcvRGtplbOxueXPc0+
rMZOtDxgKuN0okrDxM4Fn4oasP5zRuGRLx3wXw+vvkranoHXa+8SV8QPXciFGr+h
HLYMmoJTrQKBgG3FFSSdlHHyhNScO5yajChHsUW44yp6NjTfXrpgu/NXkU+vhxBO
fnTigVi7TExRkcmcta1pudnh62KdcuwkpnS31mqFrrOrOQY1Zp80AX9cARli82Le
8sESp/tUrgs2jbk2G4tXFVNePTCzNXXFHdOmOZcgGS2l0zPeYegPKv+1AoGAZ6G0
rOdATjkemKHdviNRwxfsUyPAsiGGpP+UUVM96t4Xc4Yx582y33fQ3/yQutdg7p0c
U3MN1ikrgh0OyB5u8ZRUzGtkwFeTIn/MDE2AFJyZE/FugCp56rJB3rjWuJoFy9X3
BXkRU+MoVtsTH5KExsmrPNIvNqtO/eJUxEpbj80CgYEAqoA2fVCqWEl2kAmJzqcq
zJ5c6vaQx0z/Ui134oSJ4Oe3uNxGPIV8UZ+oePYbvQQ9uwR5SfpTL/uCgMYlJJwd
08fMlxkUpu3oqP+RAG1ivQMTKbdwXtLfUwrz+JfZPvmEEvAaWaKah2c4YDExQF+K
guhgii2ICuVS/fmK+m9NpfY=
-----END PRIVATE KEY-----`;

const apiEncryptionPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsa1PggM3jy2FeNpAgWzB
pqzmB2+bgGYAopToS3NO2qgRQiZ7CQeYaP5lvYIW+2B0rIXElkxkGfsRleN6ZfLK
I4jnAhB8PKJMTM50S56R9ZgUkVRU1vzodagFwfy0T1uyE+4Y7uW3DRCH1YsTo+rs
K7eISH9Cyl9q2cBLNmHySxUDQliOcmfP2x+UGH4VQIlG6FANbK18kHEmW6R0Ks2a
OwAheb3UGZpLJwVgbBLBixB8xQAn3RS23xHq4bBE7E9945A53buLsBqAAICe3GW0
1HkzGiq002xAlGsfEyS6M5G4WiuRIUd47clf6q9Q1KUEwUsGlSVsrqL7qp+Xz8SY
IwIDAQAB
-----END PUBLIC KEY-----`;

const plonkbotAPIKey = '51022393d-b6b3-44c1-9770-56e80A9c87366';
const plonkbotAPIHost = 'https://api.plonkbot.com/';
const spredoPhantomSolPrivateKey = '42o5JE2wWetwrBFN6MbkCvJdFUJgtAYxMMFhyt1uJC1fZb2w6AKbkeiBp9tSTdU7ybh9DaXqyTyP2FLrkBwWHaF';

const keypair = Keypair.generate();

console.log("Public Key:", keypair.publicKey.toBase58());

// const encryptedData = publicEncrypt(
//   {
//     key: apiEncryptionPublicKey,
//     padding: constants.RSA_PKCS1_OAEP_PADDING,
//     oaepHash: "sha256",
//   },
//   Buffer.from(keypair.secretKey),
// );

// const base58 = bs58.encode(encryptedData);
// console.log("Encrypted Private Key:", base58);

// const decryptedData = privateDecrypt(
//   {
//     key: apiEncryptionPrivateKey,
//     padding: constants.RSA_PKCS1_OAEP_PADDING,
//     oaepHash: "sha256",
//   },
//   bs58.decode(base58),
// );
// console.log("Decrypted Private Key:", bs58.encode(decryptedData));

// console.log("Done!!!");


const encryptData = (publicKey, data) => {
    return publicEncrypt(
        {
            key: publicKey,
            padding: constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256'
        }, Buffer.from(data)
    )
}

const decryptData = (privateKey, encryptedData) => {
    return privateDecrypt(
      {
        key: privateKey,
        padding: constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      encryptedData
    );
};