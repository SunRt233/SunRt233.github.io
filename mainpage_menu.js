window.onload = function()
{
	menuFixed('top-appbar');
}
function menuFixed(id)
{
	var obj = document.getElementById(id);
	var _getHeight = obj.offsetTop;

	window.onscroll = function()
	{
		changePos(id,_getHeight);
	}
}
function changePos(id,height)
{
	var obj = document.getElementById(id);
	var title_box = document.getElementById('title-box');
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop < height)
	{
		obj.style.width = '';
		obj.style.position = 'relative';
//		obj.style.top = '0px';
//		obj.style.marginTop = '80px';
		obj.style.marginLeft = '120px';
		obj.style.marginRight = '120px';
		title_box.style.marginBottom = '112px';
//obj.parentElement.style.paddingLeft = '120px';
	}else
	{
		obj.style.width = '100%';
		obj.style.position = 'fixed';
//		obj.style.marginTop = '0px';
		obj.style.marginLeft = '0px';
		obj.style.marginRight = '0px';
		title_box.style.marginBottom = '242px';
//obj.parentElement.style.paddingLeft = '0px';
	}
}

function addNewDiv()
{
	var divBox = document.getElementById("div-box");
	var div = document.createElement("div")
	div.className = "box  mdui-shadow-5";
	var newDiv = "<div class='box  mdui-shadow-5'></div>";
	divBox.appendChild(div);
}