function spell_checker()
{
    fetch('/api/checker', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
           text: document.getElementById('mail').value,
        }),
    })
    .then(function (data) {
        return data.json();
    })
    .then(function (data) {
        const errors = data.errors.join(', ');
        document.getElementById('wrong').innerHTML = errors;
    });

}

function test()
{
    alert("hello");
}
