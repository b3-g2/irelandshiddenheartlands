$(document).ready(function () {
    $('#convertButton').click(function () {
        var dkkAmount = $('#dkkAmount').val();
        // Make AJAX request to the currency conversion API
        $.ajax({
            url: 'https://api.exchangerate-api.com/v4/latest/euro',
            data: {
                base: 'DKK',
                symbols: 'EUR',
                amount: dkkAmount
            },
            success: function (response) {
                var eurRate = response.rates.EUR;
                var eurAmount = (dkkAmount * eurRate).toFixed(2); // Convert DKK to EUR
                $('#eurAmount').val(eurAmount);
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
});
