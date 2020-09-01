let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')
let ulTasks = $('#ulTasks')

function addItem() {
    let task = inpNewTask.val();
    let a = ulTasks.append($(`<li class="list-group-item">${task}</li>`))
    let b = $(a[0].children[a[0].children.length-1])
    b.click(() => b.toggleClass('done'))
    inpNewTask.val('');
    toggleButtons()
}

function toggleButtons() {
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length == 0)
    btnCleanup.prop('disabled', ulTasks.children().length == 0)
}

inpNewTask.keypress((e) => {
    if(e.which == 13) {
        addItem();
    }
})

inpNewTask.on('input', () => {
    toggleButtons()
})

btnAdd.click(addItem)

btnReset.click(() => {
    inpNewTask.val('');
    toggleButtons()
})

btnSort.click(() => {
    $('#ulTasks .done').appendTo(ulTasks)
})

btnCleanup.click(() => {
    $('#ulTasks .done').remove()
    toggleButtons()
})



