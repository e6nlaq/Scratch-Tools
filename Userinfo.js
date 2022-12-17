/*
 * Author @e6nlaq
 * Version 1.0
*/

async function main() {
	//URL処理用
	var isuser = true;
	console.clear();
	const user = window.prompt("ユーザーを入力してね!", "");

	// ユーザー存在?
	const untmp = await fetch(`https://scratch.mit.edu/accounts/check_username/${user}/`);
	const unda = await untmp.json();

	if (unda[0].msg == "username exists") {
		console.info(`${user}が確認できました!`);
		console.info("");

		var usera = await fetch(`https://scratchdb.lefty.one/v2/user/info/${user}`);
		var userj = await usera.json();

		const username = userj.username;

		console.log(`ユーザー名 : ${userj.username}`)
		console.info(`ユーザーID : ${userj.id}`);
		console.info(`ステータス : ${userj.status}`);
		console.info(`クラスID : ${userj.school}`);
		console.info(`位置情報 : ${userj.country}`);
		console.info(`参加日 : ${userj.joined}`);
		console.info(`フォロー : ${userj.following}`);
		console.info(`フォロワー : ${userj.followers}`);

		var usera = await fetch(`https://api.scratch.mit.edu/users/${user}/messages/count`);
		var userj = await usera.json();

		console.log(`未読メッセージ数 : ${userj.count}`);

		var usera = await fetch(`https://api.scratch.mit.edu/users/${user}/projects`);
		var userj = await usera.json();

		console.info("");
		console.info(`${username}が投稿した作品`);

		const shere = Object.keys(userj).length;

		for (let i = 0; i < shere; i++) {
			console.log("");
			console.log("");
			console.info(`プロジェクトID : ${userj[i].id}`);
			console.info(`プロジェクトタイトル : ${userj[i].title}`);
			console.info(`作成日 : ${userj[i]["history"].created}`);
			console.info(`共有日 : ${userj[i]["history"].shared}`);
			console.info(`最終更新日 : ${userj[i]["history"].modified}`);
			console.info(`参照数 : ${userj[i]["stats"].views}`);
			console.info(`好き : ${userj[i]["stats"].loves}`);
			console.info(`お気に入り : ${userj[i]["stats"].favorites}`);
			console.info(`リミックス : ${userj[i]["stats"].remixes}`);
		}

	}
	else {
		console.error(`ユーザー名 ${user}は無効です`);
	}

}

main();