<template>
         <div class="container">
            <h2>Virtual Account Payment History Details</h2>
            <div class="box">
                <!-- accounts index -->
                <p>No <strong>{{ id }}</strong></p>
                <!-- Virtual Account Number  -->
                <p>Virtual Account Number   <strong>1-100-000001</strong></p>
            </div>
            <div class="details">
                <table>
                    <thead>
                        <tr>
                            <th>Virtual Account No</th>
                            <td>{{ VirtualAccountNo }}</td>
                            <th>Payment Name</th>
                            <td>{{ PaymentName }}</td>
                        </tr>
                        <tr>
                            <th>Customer Ref No</th>
                            <td>{{ CustomerRefNo }}</td>
                            <th>Customer Description</th>
                            <td>{{ CustomerDescription }}</td>
                        </tr>
                        <tr>
                            <th>Payment Type</th>
                            <td>{{ PaymentType }}</td>
                            <th>Currency</th>
                            <td>{{ Currency }}</td>
                        </tr>
                        <tr>
                            <th>Monthly Repetition</th>
                            <td colspan="4">YES</td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Payment Start Date</th>
                            <td>{{ PaymentStartDate }}</td>
                        </tr>
                        <tr>
                            <th>1st Payment Due Date</th>
                            <td>{{ FirstPaymentDueDate }}</td>
                            <th>1st Payment Due Amount</th>
                            <td>{{ FirstPaymentDueAmount }}</td>
                        </tr>
                        <tr>
                            <th>2nd Payment Due Date</th>
                            <td>{{ SecondPaymentDueDate }}</td>
                            <th>2nd Payment Due Amount</th>
                            <td>{{ SecondPaymentDueAmount }}</td>
                        </tr>
                        <tr>
                            <th>Payment Status</th>
                            <td>{{ PaymentStatus }}</td>
                        </tr>
                        <tr>
                            <th>Payment Date</th>
                            <td>{{ PaymentDate }}</td>
                            <th>Payment Amount</th>
                            <td>{{ PaymentAmount }}</td>
                        </tr>
                        <tr>
                            <th>Virtual Account Expiry Date</th>
                            <td>{{ VirtualAccountExpiryDate }}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'AccountDetailItems',
    props: ['id','VirtualAccountNo','PaymentName','CustomerRefNo','CustomerDescription','PaymentType','Currency','PaymentStatus','VirtualAccountExpiryDate','PaymentAmount','PaymentDate','SecondPaymentDueAmount','SecondPaymentDueDate','FirstPaymentDueAmount','FirstPaymentDueDate','PaymentStartDate']
})
</script>

<style scoped>

.container > h2 {
    text-align: center;
    padding-top: 20px;
}
strong {
    padding-left: 10px;
}
.box {
    display: flex;
    gap: 30px;
    position: relative;
    justify-content:flex-start;
    padding-left: 1%;
    border: 1px solid;
    margin: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
}
table {
    width: 100%;
}
th {
    background-color: rgb(240, 240, 240);
}

table, td, th {
    border: 1px solid rgb(168, 168, 168);
    border-collapse: collapse;
    padding: 3px;
    font-size: 15.3px;
}

</style>