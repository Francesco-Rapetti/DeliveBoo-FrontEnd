<script>
import Braintree from 'braintree-web';

export default {
    name: 'App',
    data() {
        return {
            braintree: null
        }
    },
    mounted() {
        this.braintree = new Braintree({
            merchantId: 'xhx64ykzjmxpjgtb',
            publicKey: 'j3nqj58gbsm3gjds',
            privateKey: 'e644ccd0fb0e4b3bce3f47dd8d485b42'
        });

        this.braintree.generateClientToken().then(clientToken => {
            this.braintree.create('dropin', {
                container: '#braintree-dropin',
                clientToken: clientToken
            });
        });
    }
};
</script>

<template>
    <div id="app">
        <div id="braintree-dropin"></div>
    </div>
</template>

<style>
#braintree-dropin {
    width: 400px;
    height: 200px;
}
</style>
