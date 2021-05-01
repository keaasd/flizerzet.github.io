'use strict';

const input = document.querySelector('#input');
const inputBtn = document.querySelector('.input-btn');
const todosNeed = document.querySelector('.todos-need');
const todosDone = document.querySelector('.todos-done');
const importantCheckbox = document.querySelector('.make-important input[type=\'checkbox\']');

let todos = document.querySelectorAll('.todo');

let deleteBtn = document.querySelectorAll('.delete');
let doneBtn = document.querySelectorAll('.done');
let editBtn = document.querySelectorAll('.edit');

function updateHoverBtns() {
	deleteBtn = document.querySelectorAll('.delete');
	doneBtn = document.querySelectorAll('.done');
	editBtn = document.querySelectorAll('.edit');

	deleteBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			btn.parentElement.parentElement.remove();
		})	
	});

	doneBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!btn.parentElement.parentElement.classList.contains('editable')) {
				new Todo().renderDone(btn.parentElement.parentElement.querySelector('.todo-label .todo-text').textContent);
				btn.parentElement.parentElement.remove();
			} else {
				btn.parentElement.parentElement.classList.remove('editable');
				btn.parentElement.parentElement.querySelector('.todo-label .todo-text').setAttribute('contenteditable', false);
			}
		})
	});

	editBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			btn.parentElement.parentElement.classList.add('editable');
			btn.parentElement.parentElement.querySelector('.todo-label .todo-text').setAttribute('contenteditable', true);
			btn.parentElement.parentElement.querySelector('.todo-label .todo-text').focus();
		})
	})

}

function checkInput() {
	if (input.value == '') {
		inputBtn.classList.remove('input-btn_active')
	} else {
		inputBtn.classList.add('input-btn_active')
	}
}

class Todo {
	constructor(text) {
		this.text = text
	}

	renderTodo() {
		let todo = document.createElement('div');
		if (importantCheckbox.checked) {
			todo.classList.add('todo', 'important')
			todo.innerHTML = `<div class="todo-hover hover-important">
									<div class="icon done"><img src="tick.svg" alt=""></div>
									<div class="icon edit"><img src="pen.svg" alt=""></div>
									<div class="icon delete"><img src="delete.svg" alt=""></div>
								</div>
								<label class="todo-label">
									<div class="todo-text">${this.text}</div>
								</label>`
		} else {
			todo.classList.add('todo')
			todo.innerHTML = `<div class="todo-hover">
									<div class="icon done"><img src="tick.svg" alt=""></div>
									<div class="icon edit"><img src="pen.svg" alt=""></div>
									<div class="icon delete"><img src="delete.svg" alt=""></div>
								</div>
								<label class="todo-label">
									<div class="todo-text">${this.text}</div>
								</label>`
		}
		todosNeed.append(todo);
		updateHoverBtns();
	}

	renderDone(text) {
		let todo = document.createElement('div');
		todo.classList.add('todo')
		todo.innerHTML = `<div class="todo-hover hover-done">
								<div class="icon delete"><img src="delete-black.svg" alt=""></div>
							</div>
							<label class="todo-label">
								<div class="todo-text">${text}</div>
							</label>`;
		todosDone.append(todo);
		updateHoverBtns();
	}
}

input.addEventListener('input', () => {
	checkInput();
})

inputBtn.addEventListener('click', () => {
	if (inputBtn.classList.contains('input-btn_active')) {
		new Todo(input.value).renderTodo();
		input.value = '';
		checkInput();
	}
})