const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <table>
        <tr>
            <th>key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    `
})