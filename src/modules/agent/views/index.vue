<template>

    <div class="container-fluid">
        <div class="row d-f m-b-m">

            <div class="col-sm-4 col-xs-6">
                <div class="card-panel bg-warning">
                    <div class="cacrd-panel-icon icon-cog rotate180"></div>
                    <div class="cacrd-panel-description">Building</div>
                    <div class="cacrd-panel-number">3</div>
                </div>
            </div>
             <div class="col-sm-4 col-xs-6">
                <div class="card-panel bg-success">
                    <div class="cacrd-panel-icon icon-coffee"></div>
                    <div class="cacrd-panel-description">Idle</div>
                    <div class="cacrd-panel-number">5</div>
                </div>
            </div>
             <div class="col-sm-4 col-xs-12">
                <div class="row-panel bg-white row" >
                    <div class="row-panel-item col-sm-4">
                        <div class="row-panel-top">ALL</div>
                        <div class="row-panel-bottom">8</div>
                    </div>

                    <div class="row-panel-item col-sm-4">
                        <div class="row-panel-top">PHYSICAL</div>
                        <div class="row-panel-bottom">4</div>
                    </div>

                    <div class="row-panel-item col-sm-4">
                        <div class="row-panel-top">VIRTUAL</div>
                        <div class="row-panel-bottom">4</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row n-m-l bg-white">
            <div class="tabs col-sm-4 col-xs-12">
                <div class="tabs-nav active">ALL</div>
                <div class="tabs-nav">PHYSICAL</div>
                <div class="tabs-nav">VIRTUAL</div>
            </div>
            <div class="col-sm-8 col-xs-12 n-p-l search-container">
                <div class="search-input-container">
                    <i class="icon-search"></i>
                    <input class="search-input" type="text">
                </div>

                <span class="change-show-type">
                    <i class="icon-th-card active"></i>
                    <i class="icon-th-list"></i>
                </span>
                
            </div>
        </div>

    </div>
 
</template>