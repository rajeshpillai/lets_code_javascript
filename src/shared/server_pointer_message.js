// Copyright (c) 2016-2017 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var ServerPointerEvent = module.exports = function ServerPointerEvent(id, x, y) {
		this.id = id;
		this.x = x;
		this.y = y;
	};

	ServerPointerEvent.MESSAGE_NAME = "server_pointer_event";
	ServerPointerEvent.prototype.name = function() { return ServerPointerEvent.MESSAGE_NAME; };

	ServerPointerEvent.fromPayload = function(obj) {
		return new ServerPointerEvent(obj.id, obj.x, obj.y);
	};

	ServerPointerEvent.prototype.payload = function() {
		return {
			id: this.id,
			x: this.x,
			y: this.y
		};
	};

}());