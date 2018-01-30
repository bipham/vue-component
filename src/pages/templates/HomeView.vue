<template>
    <div class="home-page">
        <DataTable id="dynamicTable" :tableData="tableData" :static="false" :tableColumn="tableColumn" :otherOptions="otherOptions">
            <tr slot="tfoot">
                <th></th>
                <th></th>
                <th></th>
                <th>Total:</th>
                <th></th>
            </tr>
        </DataTable>
        <button @click="update">Update</button>
    </div>
</template>

<script>
    import NProgress from 'nprogress'
    import axios from 'axios';
    export default {
        data () {
            return {
                tableData: [
                    {
                        "id": "11",
                        "name": "Tiger Nixon",
                        "position": "System Architect",
                        "salary": "$320,800",
                        "start_date": "2011/04/25",
                        "office": "Edinburgh",
                        "extn": "5421VND"
                    },
                    {
                        "id": "2",
                        "name": "Garrett Winters",
                        "position": "Accountant",
                        "salary": "$170,750",
                        "start_date": "2011/07/25",
                        "office": "Tokyo",
                        "extn": "8422VND"
                    },
                    {
                        "id": "3",
                        "name": "Ashton Cox",
                        "position": "Junior Technical Author",
                        "salary": "$86,000",
                        "start_date": "2009/01/12",
                        "office": "San Francisco",
                        "extn": "1562VND"
                    },
                    {
                        "id": "4",
                        "name": "Cedric Kelly",
                        "position": "Senior Javascript Developer",
                        "salary": "$433,060",
                        "start_date": "2012/03/29",
                        "office": "Edinburgh",
                        "extn": "6224VND"
                    },
                    {
                        "id": "5",
                        "name": "Airi Satou 123",
                        "position": "Accountant",
                        "salary": "$162,700",
                        "start_date": "2008/11/28",
                        "office": "Tokyo",
                        "extn": "5407"
                    },
                    {
                        "id": "6",
                        "name": "Brielle Williamson",
                        "position": "Integration Specialist",
                        "salary": "$372,000",
                        "start_date": "2012/12/02",
                        "office": "New York",
                        "extn": "4804"
                    },
                    {
                        "id": "7",
                        "name": "Herrod Chandler",
                        "position": "Sales Assistant",
                        "salary": "$137,500",
                        "start_date": "2012/08/06",
                        "office": "San Francisco",
                        "extn": "9608"
                    },
                ],
                tableColumn: [
                    { title: `Position <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>`, data: "position" },
                    { title: "Office", data: "office" },
                    { title: "Extn.", data: "extn" },
                    { title: "Start date", data: "start_date" },
                    { title: "Salary", data: "salary", "render": function ( data, type, row, meta ) {
                        return `<button onclick="hello()">Download</button>
                                <h5>hello</h5>
                                `;
                    } }
                ],
                otherOptions: {
                    "searching": false,
                    "processing": true,
                    "destroy": true,
                    colReorder: true
                }
            }
        },
        watch: {

        },
        computed: {

        },
        beforeCreate () {

        },
        methods: {
            update() {
                this.tableData= [
                    {
                        "id": "11",
                        "name": "Tiger Nixon 123",
                        "position": "System Architect",
                        "salary": "$320,800",
                        "start_date": "2011/04/25",
                        "office": "Edinburgh",
                        "extn": "5421VND"
                    },
                    {
                        "id": "2",
                        "name": "Garrett Winters",
                        "position": "Accountant",
                        "salary": "$170,750",
                        "start_date": "2011/07/25",
                        "office": "Tokyo",
                        "extn": "8422VND"
                    },
                    {
                        "id": "3",
                        "name": "Ashton Cox",
                        "position": "Junior Technical Author",
                        "salary": "$86,000",
                        "start_date": "2009/01/12",
                        "office": "San Francisco",
                        "extn": "1562VND"
                    },
                    {
                        "id": "4",
                        "name": "Cedric Kelly",
                        "position": "Senior Javascript Developer",
                        "salary": "$433,060",
                        "start_date": "2012/03/29",
                        "office": "Edinburgh",
                        "extn": "6224VND"
                    },
                    {
                        "id": "5",
                        "name": "Airi Satou 123",
                        "position": "Accountant",
                        "salary": "$162,700",
                        "start_date": "2008/11/28",
                        "office": "Tokyo",
                        "extn": "5407"
                    },
                    {
                        "id": "6",
                        "name": "Brielle Williamson",
                        "position": "Integration Specialist",
                        "salary": "$372,000",
                        "start_date": "2012/12/02",
                        "office": "New York",
                        "extn": "4804"
                    },
                    {
                        "id": "7",
                        "name": "Herrod Chandler",
                        "position": "Sales Assistant",
                        "salary": "$137,500",
                        "start_date": "2012/08/06",
                        "office": "San Francisco",
                        "extn": "9608"
                    },
                ];
                this.tableColumn= [
                    { title:'Name', data: "name" },
                    { title: `Position <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>`, data: "position" },
                    { title: "Salary", data: "salary", "render": function ( data, type, row, meta ) {
                        return `<button onclick="hello()">Download</button>
                                <h5>hello</h5>
                                `;
                        }
                    },
                    { title: "Office", data: "office" },
                    { title: "Extn.", data: "extn" },
                    { title: "Start date", data: "start_date" },
                ]
                this.otherOptions= {
                    "searching": true,
                        "processing": true,
                    "destroy": true,
                    colReorder: true
                }
            }
        }
    }
</script>

<style scoped>
    @import "./../css/Home.css";
</style>