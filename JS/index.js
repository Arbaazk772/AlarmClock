let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {

    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br> on " + date;
}, 1000);

//const music = new Audio('adf.wav');
var sound= new Audio('https://kukuklok.com/audio/military.mp3');
var timer;

function setAlarm(el){
	var time = document.getElementById('alarmTime').valueAsNumber;
	if(isNaN(time)){
		alert("Invalid DateTime");
		return;
	}
	
	var alarm = new Date(time);
	var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
	var duration = alarmTime.getTime() - (new Date()).getTime();
	
	if(duration < 0){
		alert('Time is already passed');
		return;
	}
	
	timer = setTimeout(initAlarm, duration);
	el.innerHTML = "<span class='glyphicon glyphicon-remove'></span> Cancel Alarm";
	el.setAttribute('onclick', 'cancelAlarm(this);');
	el.setAttribute('class', 'btn btn-danger');
}

function cancelAlarm(el){
	el.innerHTML = "<span class='glyphicon glyphicon-time'></span> Set Alarm";
	el.setAttribute('onclick', 'setAlarm(this);');
	el.setAttribute('class', 'btn btn-success');
	clearTimeout(timer);
}

function initAlarm(){
	sound.loop = true;
	sound.play();
	document.getElementById('alarmButton').style.display = 'none';
	document.getElementById('selectButton').style.display = '';
}

function stopAlarm(){
	sound.pause();
	sound.currentTime = 0;
	document.getElementById('selectButton').style.display = 'none';
	cancelAlarm(document.getElementById('alarmButton'));
	document.getElementById('alarmButton').style.display = '';
}

function snoozeAlarm(){
	stopAlarm();
	setTimeout(initAlarm, 300000);
	button.innerText = "Cancel Alarm";
	button.setAttribute('onclick', 'cancelAlarm(this);');
}