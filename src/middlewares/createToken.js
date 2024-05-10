const crypto = require('crypto');
const base64url = require('../config/base64url');
const fs = require('node:fs/promises');

async function jwtSecret() {
	try {
		const data = await fs.readFile('D:/Workspace/dev-to-clone/jwt.txt', {
			encoding: 'utf8',
		});
		return data;
	} catch (err) {
		console.log(err);
	}
}

async function createSignature(encodedHeader, encodedPayload) {
	const tokenData = `${encodedHeader}.${encodedPayload}`;
	const jwtKey = await jwtSecret();
	const hmac = crypto.createHmac('sha256', jwtKey);
	const signature = hmac.update(tokenData).digest('base64url');
	return signature;
}

async function createLoginToken(userID) {
	const header = {
		alg: 'HS256',
		typ: 'JWT',
	};
	const payload = {
		subj: userID,
	};
	const encodedHeader = base64url(JSON.stringify(header));
	const encodedPayload = base64url(JSON.stringify(payload));
	const signature = await createSignature(encodedHeader, encodedPayload);
	return { token: `${encodedHeader}.${encodedPayload}.${signature}` };
}

async function isTokenValid(req, res) {
	const reqToken = req.headers.authorization?.slice(7);
	if (!reqToken) {
		return false;
	}
	const [header, payload, tokenSignature] = reqToken.split('.');
	const reqSignature = await createSignature(header, payload);
	return reqSignature === tokenSignature;
}

module.exports = { createSignature, createLoginToken, isTokenValid };
