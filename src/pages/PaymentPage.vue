<template>
    <div class="sub-body">
        <header class="header">
            <h1>Totale Ordine</h1>
            <h2 class="price"><span class="price__dollar">$</span>173<span class="price__time"></span>
            </h2>
            <p class="desc">Procedi al Pagamento</p>
        </header>

        <div class="pay-select">
            <div class="pay-select__item pay-select--card is-active" @click="selectPaymentMethod('card')">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/Card%20Icon.svg" alt="" />
                <p>Debit/Credit Card</p>
            </div>




        </div>

        <div class="select-body">
            <div class="select-body__content select-body--card is-active">
                <form action="/" method="POST" id="cardForm">
                    <label class="form__label" for="card-number">Card Number</label>
                    <div class="card-input" id="card-number"></div>

                    <label class="form__label" for="expiration-month">Expiration Date</label>
                    <div class="date__container">
                        <div class="card-input" id="expiration-month"></div>
                        <div class="card-input" id="expiration-year"></div>
                    </div>

                    <label class="form__label" for="cvv">CVV</label>
                    <div class="card-input" id="cvv"></div>

                    <label class="form__label" for="cvv">Billing Zip Code</label>
                    <div class="card-input" id="postal-code"></div>

                    <input type="submit" value="Subscribe" id="submit" />
                </form>
            </div>

            <div class="select-body__content select-body--paypal">

            </div>
        </div>
    </div>
</template>

<script>
import braintree from 'braintree-web';

export default {
    mounted() {
        this.initializeBraintree();
    },
    methods: {
        initializeBraintree() {
            const form = document.querySelector('#cardForm');

            braintree.client.create({
                authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUzTURrNU56a3dNVEVzSW1wMGFTSTZJalZtTUdZd01tUmtMV1kxT1RrdE5HRXpNaTA0WWpKaExUazRPV1ZqTnpObFptRXpaaUlzSW5OMVlpSTZJbmhvZURZMGVXdDZhbTE0Y0dwbmRHSWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pZUdoNE5qUjVhM3BxYlhod2FtZDBZaUlzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPbVpoYkhObGZTd2ljbWxuYUhSeklqcGJJbTFoYm1GblpWOTJZWFZzZENKZExDSnpZMjl3WlNJNld5SkNjbUZwYm5SeVpXVTZWbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LkVObDJIeXJSTFNha2JjSW5qbFlJVkt3ZEpUMGJBVXRrR3BTWGFqWHhURkRYMUs3RGwzR3BmSmNrUk4tWHYzYTZGdGNxOWRLRElPWHFCWF9hZDFMNG5RIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3hoeDY0eWt6am14cGpndGIvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4IiwiZmVhdHVyZXMiOlsidG9rZW5pemVfY3JlZGl0X2NhcmRzIl19LCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGh4NjR5a3pqbXhwamd0Yi9jbGllbnRfYXBpIiwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwibWVyY2hhbnRJZCI6InhoeDY0eWt6am14cGpndGIiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsInZlbm1vIjoib2ZmIiwiY2hhbGxlbmdlcyI6W10sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL29yaWdpbi1hbmFseXRpY3Mtc2FuZC5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL3hoeDY0eWt6am14cGpndGIifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJhbGxvd0h0dHAiOnRydWUsImRpc3BsYXlOYW1lIjoiRnJlZWxhbmNlIiwiY2xpZW50SWQiOm51bGwsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImVudmlyb25tZW50Ijoib2ZmbGluZSIsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsIm1lcmNoYW50QWNjb3VudElkIjoiZnJlZWxhbmNlIiwiY3VycmVuY3lJc29Db2RlIjoiRVVSIn19'
            }, (err, client) => {
                if (err) {
                    console.error(err);
                    return;
                }

                braintree.hostedFields.create({
                    client: client,
                    styles: {
                        'input, select': {
                            'font-size': '16px',
                            'font-family': 'helvetica, tahoma, calibri, sans-serif',
                            'color': '#000'
                        },
                        ':focus': {
                            'color': '#000'
                        },
                        '.invalid': {
                            'color': '#EB5757'
                        }
                    },
                    fields: {
                        number: {
                            selector: '#card-number',
                            placeholder: '•••• •••• •••• ••••',
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: '123'
                        },
                        expirationMonth: {
                            selector: '#expiration-month',
                            placeholder: 'Month',
                            select: {
                                options: [
                                    '01 - January', '02 - February', '03 - March', '04 - April',
                                    '05 - May', '06 - June', '07 - July', '08 - August',
                                    '09 - September', '10 - October', '11 - November', '12 - December'
                                ]
                            }
                        },
                        expirationYear: {
                            selector: '#expiration-year',
                            placeholder: 'Year',
                            select: true
                        },
                        postalCode: {
                            selector: '#postal-code',
                            placeholder: '6000'
                        }
                    }
                }, (err, hostedFields) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    submit.removeAttribute('disabled');

                    form.addEventListener('submit', (event) => {
                        event.preventDefault();
                        alert('Fancy submission here');
                        hostedFields.tokenize((err, payload) => {
                            if (err) {
                                console.error(err);
                                return;
                            }

                            console.log('Got a nonce: ' + payload.nonce);
                        });
                    });
                });
            });
        },
        selectPaymentMethod(method) {
            const cardItem = document.querySelector('.pay-select--card');
            const paypalItem = document.querySelector('.pay-select--paypal');
            const cardContent = document.querySelector('.select-body--card');
            const paypalContent = document.querySelector('.select-body--paypal');

            if (method === 'card') {
                cardItem.classList.add('is-active');
                paypalItem.classList.remove('is-active');
                cardContent.classList.add('is-active');
                paypalContent.classList.remove('is-active');
            } else if (method === 'paypal') {
                cardItem.classList.remove('is-active');
                paypalItem.classList.add('is-active');
                cardContent.classList.remove('is-active');
                paypalContent.classList.add('is-active');
            }
        }
    }
};
</script>

<style scoped>
/* ----- GENERAL */
html {
    height: 100%;
}

body {
    background: #EEEEEE;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    align-items: center;
}

.sub-body {
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    overflow: hidden;
    transition: all 0.2s;
    width: 540px;
}

/* ----- Header */
.header {
    background: #2B0F5D;
    color: #A27BE9;
    padding: 24px 0 21px;
    text-align: center;
}

.price {
    color: #FFFFFF;
    display: flex;
    margin: 0 0 12px;
    align-items: center;
    justify-content: center;
}

.price__dollar,
.price__time {
    font-size: 16px;
    margin: 0 8px;
}

.desc {
    font-family: 'Bitter', serif;
    margin: 0;
}

/* ----- Selection */
.pay-select {
    background: #F3F3F3;
    display: flex;
    font-size: 13px;
    padding: 24px 0;
    text-align: center;
    justify-content: space-around;
}

.pay-select--card,
.pay-select--paypal {
    position: relative;
}

.pay-select__item {
    width: 48%;
}

.pay-select__item:hover {
    cursor: pointer;
}

.separator {
    background: #BABABA;
    height: 60px;
    width: 1px;
}

/* ----- Form body */
.select-body {
    padding: 32px;
    text-align: center;
}

.select-body--paypal {
    text-align: center;
}

/* ----- Form */
form label {
    display: block;
    font-family: 'Bitter', serif;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 4px;
    text-align: left;
    text-transform: uppercase;
}

.card-input {
    border: 1px solid #ECECEC;
    font-family: 'Montserrat', sans-serif;
    height: 32px;
    margin-bottom: 18px;
    padding: 4px 8px;
}

.date__container {
    display: flex;
}

#expiration-month {
    border-right: none;
}

.braintree-hosted-fields-invalid {
    border-color: #EB5757;
}

/* ----- Form Invalid */
#submit {
    background: #000000;
    border: none;
    border-radius: 30px;
    color: #FFFFFF;
    margin: 0 auto;
    padding: 18px;
    width: 315px;
}
</style>