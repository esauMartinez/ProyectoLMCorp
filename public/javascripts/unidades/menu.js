let menu = function() {
	document.querySelector('#jumbotron-unidad').innerHTML = `
        <div class="row">
            <div class="col-lg-12">
                <h4>Menu unidad</h4>                       
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card mt-3">
                    <div class="mt-3 d-flex justify-content-center align-itemns-center">
                        <i class="fa fa-clipboard-list" style="font-size: 64px;"></i>
                    </div>
                    <div class="card-body">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6">
                                <a href="#" class="btn btn-primary btn-block" id="btn-lista-unidades">Lista unidades</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-3" style="width: 100%;">
                    <div class="mt-3 d-flex justify-content-center align-itemns-center">
                        <i class="fa fa-truck" style="font-size: 64px;"></i>
                    </div>
                    <div class="card-body">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6">
                                <a href="#" class="btn btn-primary btn-block" id="btn-alta-unidad">Alta unidad</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

module.exports = menu;