var nmo = [];
var ahmad = 0;
var isAnswerSelected = false;
var arr = [];
var wrong = 0;
var arrr = [];
var ans = [];
var cou = 1;
var php = 0;
var count = 0;
var i = 0;
var j = 1;
var z = 2;
var k = 3;
// alert(arrr);
// console.log(arrr);
$("#section button").on("click", function() {
	$("#logoh , #section").css({
		visibility: "hidden"
		// transitionDuration: "1s",
	});
	$("#mj").css({
		background: "white"
	});
	appo();
});
function appo() {
	$("body").append(
		'<button type="button"  onclick="fg()" class="appen" id="inop">+</button>'
	);
}
$("body").append("<h1 id='uio'></h1>");
function fg() {
	$("#add").css({
		visibility: "visible"
	});
	$("#add").append(
		'<input type="text" name="" placeholder="Enter THE QUESTION" id="inm">',
		" <button id='btnn' onclick='opta()'>OPTAIONS</button>"
	);
}
function opta() {
	var question = $("#inm").val();
	console.log(" value of question ", question);
	arr.push(question);
	$("#inm").text("");
	$("#opation").css({
		visibility: "visible"
	});
	$("#opation").show();
	console.log(arr);
}
function r() {
	var nh = $("#opinp");
	var nhc = $("#oip");
	var nhu = $("#oip1");
	var nhs = $("#oip2");
	var nhh = nh.val();
	var nhf = nhc.val();
	var nhr = nhu.val();
	var nhw = nhs.val();
	arrr.push(nhh, nhf, nhr, nhw);
	nh.val("");
	nhc.val("");
	nhu.val("");
	nhs.val("");
	$("body").append("<div id='cd'></div>");
	$("#cd").append("<h1>ENTER THE CORRECT ANSWER</h1>");
	$("#cd").append("<input type ='text' id='ci'></input>");
	$("#cd").append("<button onclick='sho()' id='com'>SAVE</button>");
	// console.log(arrr[2]);
}
function sho() {
	ans.push($("#ci").val());
	$("#ci").val("");
	console.log(ans);
	$("#inm").remove();
	$("#cd").remove();
	$("#opation , #btnn").hide();
	$("#uio").text(`Question: "(${cou})"  Saved`);
	cou++;
	$("#mnb").css({
		visibility: "visible"
	});
}
function take() {
	$("#mj,#inop,#uio,#mnb").remove();
	$("body").append("<div id='tmain'></div>");
	$("#tmain").append("<div id ='cen'></div>");
	$("#cen").append("<button id='tbtn' onclick='yu()'>NEXT<button>");
	$("#cen").append("<div id='tques'></div>");
	$("#tques").append("<h1 id='th'></h1>");

	$("#cen").append("<div id='tqe'></div>");
	$("#tqe").append("<h3 id='trq'></h3>");
	$("#cen").append(
		"<input type='button' class='tqyt' id='t1' onclick='ify(event)' ></input>"
	);
	$("#cen").append(
		"<input type='button' class='tqyt'  id='t2' onclick='ify(event)' ></input>"
	);
	$("#cen").append(
		"<input type='button' class='tqyt' id='t3' onclick='ify(event)' ></input>"
	);
	$("#cen").append(
		"<input type='button' class='tqyt' id='t4' onclick='ify(event)' ></input>"
	);
}
function yu() {
	// alert(j);
	isAnswerSelected = false;
	console.log($("#t2"));
	for (var ha = 1; ha < 5; ha++) {
		$("#t" + ha).css("backgroundColor", "");
	}
	$("#th").text(`QUESTION :: ${count}`);
	$("#trq").text(arr[`${count}`]);
	$("#t1").val(arrr[`${i}`]);
	$("#t2").val(arrr[`${j}`]);
	$("#t3").val(arrr[`${z}`]);
	$("#t4").val(arrr[`${k}`]);
	count++;
	i++;
	i++;
	i++;
	i++;

	j++;
	j++;
	j++;
	j++;

	z++;
	z++;
	z++;
	z++;

	k++;
	k++;
	k++;
	k++;
	// alert(count);
	// alert(arr.length);
	if (count == arr.length) {
		$("#tbtn").remove();
		$("#cen").append("<button onclick='ert()' id='rb'> result </button>");
	}
}
function ify(e) {
	console.log(ans[count - 1]);

	if (!isAnswerSelected) {
		isAnswerSelected = true;

		if (e.target.value == ans[count - 1]) {
			$(e.target).css({ backgroundColor: "green" });
			ahmad++;
		} else if (e.target.value != ans[count - 1]) {
			$(e.target).css({ backgroundColor: "red" });
			wrong++;
		}
	}
}
function ert() {
	$("#tmain").remove();
	$("body").append("<div id='lmain'></div>");
	$("#lmain").prepend("<h1 id='fay' > ENTER YOR NAME</h1>");
	$("#lmain").append("<input type='text' id='nam'></input>");
	$("#lmain").append(
		"<button type='button' id='namb' onclick='dfg()'> save </button>"
	);
}
function dfg() {
	var namee = $("#nam").val();
	nmo.push(namee);
	console.log(nmo);

	console.log(namee);
	$("#fay,#nam,#namb").remove();
	$("#lmain").append("<img src='gif.gif'></img>");

	$("#lmain").append("<h1> WAIT WE ARE CONCOLUDING YOUR RESULT .....</h1>");
	$("#lmain").append(`<button id='rtrt' onclick='klp()'>see result<button>`);
	$("#rtrt").hide();

	setInterval(function() {
		$("#rtrt").show();
	}, 6000);
}
function klp() {
	var namee = $("#nam").val();
	$("#lmain").remove();
	$("body").append("<div id='fmain'></div>");
	$("body").css({
		background: "black"
	});
	$("#fmain").append(
		`<h2 class="animated infinite jello" id="pdf">MR:${nmo[0]}</h2>`,
		`<h1 class="animated infinite zoomInRight" id="f5">Quiz Result<h1>`,
		`<h1 class="w"> TOTAL QUESTION </h1>`,
		`<h1 class="w" id="valow">${cou - 1}</h1>`,
		`<h1 class="w1"> corect answer </h1>`,
		`<h1 class="w1" id="valow">${ahmad}</h1>`,
		`<h1 class="w2">WRONG ANSWER</h1>`,
		`<h1 class="w2" id="valow">${wrong}</h1>`,
		`<h1 class="w3"> percentage </h1>`,
		`<h1 class="w3" id="valow">${(ahmad / (cou - 1)) * 100}</h1>`
	);
}
