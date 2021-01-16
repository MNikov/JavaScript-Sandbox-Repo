function objFactory(input) {
    let data = JSON.parse(input);
    console.log(data.reduce((a, o) => ({ ...a, ...o }), {}));
}

objFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
objFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`)