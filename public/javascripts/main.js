$('#demo').pagination({
    dataSource: '/user?page=4',
    locator: 'data',
    totalNumberLocator: function(response) {
        return response.total;
    },
    pageSize: 2,
    afterPageOnClick: function(event, pageNumber) {
        loadPage(pageNumber)
    },
    afterNextOnClick: function(event, next) {
        loadPage(next)
    },
    afterPreviousOnClick: function(event, pre) {
        loadPage(pre)

    }
})

function loadPage(page) {
    $('#content').html('')
    $.ajax({
            url: "/user?page=" + page,
            type: 'GET'
        })
        .then(rs => {
            for (item of rs.data) {
                var element = $(`
                <h1> ${item.username} : ${item.password} </h1>
               `)
                $('#content').append(element)
            }
        })
        .catch(err => {
            console.log('loi')
        })
}
loadPage(1)