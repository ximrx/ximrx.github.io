<?php
require('./code/header.php');
?>
<div class="col-md-10">

    <div class="row">

        <div class="col-md-6">
            <div class="dabba">
                <h2 class="urdu text-center">کھیوٹ / خسرے معلوم کریں</h2>
                <input type="number" placeholder="خسرہ یا کھیوٹ" id="khewadinpu" />
                <div class="text-center"><button type="button" class="btn btn-success urdu" id="khewadpress">خسرے تلاش کریں</button>   <button type="button" class="btn btn-success urdu" id="khasrapress">کھیوٹ تلاش کریں</button>  </div>
                <p id="khewadoudpu"></p>
            </div>
        </div>


        <div class="col-md-6">
            <div class="dabba">
                <h2 class="urdu text-center">زمین کو جمع کریں</h2>
                <table class="table table-striped" id="summerland">
                    <thead>
                        <tr>
                            <th>کنال</th>
                            <th>مرلہ</th>
                            <th>فٹ</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><input class="form-control" type="number" placeholder="0" id="sumknal" /></td>
                            <td><input class="form-control" type="number" placeholder="0" id="summarla" /></td>
                            <td><input class="form-control" type="number" placeholder="0" id="sumfoot" /></td>
                        </tr>
                    </tfoot>
                </table>
                <table class="table table-striped">
                    <tr><td colspan="3"><div class="d-grid gap-2"><button type="button" class="text-center btn btn-success urdu" id="jammahzameen">جمع کریں</button></div></td></tr>
                    <tr><td id="nedkanal">0</td><td id="nedmarla">0</td><td id="nedfood">0</td></tr>
                </table>
            </div>
        </div>




        <div class="col-md-6">
            <div class="dabba">
                <h2 class="urdu text-center">خسرے کی تفصیل</h2>
                <input type="number" placeholder="خسرہ" id="khasraprofile" />
                <div class="text-center"><button type="button" class="btn btn-success urdu" id="khasrapropress">تلاش کریں</button>  </div>
                <p id="khasradetails"></p>
            </div>
        </div>




    </div>


</div>
<?php
require('./code/footer.php');
?>