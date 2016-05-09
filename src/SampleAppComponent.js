System.register(['angular2/core', 'ag-grid-ng2/main', 'ag-grid-enterprise/main'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, main_1;
    var SampleAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (_1) {}],
        execute: function() {
            SampleAppComponent = (function () {
                function SampleAppComponent() {
                    this.columnDefs = [
                        { headerName: "Make", field: "make" },
                        { headerName: "Model", field: "model" },
                        {
                            headerName: "Price",
                            field: "price",
                            cellClass: 'rightJustify',
                            cellRenderer: function (params) {
                                return '$' + params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //thanks http://stackoverflow.com/users/28324/elias-zamaria
                            }
                        }
                    ];
                    // put data directly onto the controller
                    this.rowData = [
                        { make: "Toyota", model: "Celica", price: 35000 },
                        { make: "Ford", model: "Mondeo", price: 32000 },
                        { make: "Porsche", model: "Boxter", price: 72000 }
                    ];
                    this.GridOptions = {
                        columnDefs: this.columnDefs,
                        rowData: this.rowData,
                        rowGroupPanelShow: 'always'
                    };
                }
                SampleAppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: '<ag-grid-ng2 class="ag-fresh" style="height: 300px" [rowGroupPanelShow]="always" [columnDefs]="columnDefs"  [rowData] = "rowData"></ag-grid-ng2>',
                        directives: [main_1.AgGridNg2]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SampleAppComponent);
                return SampleAppComponent;
            }());
            exports_1("SampleAppComponent", SampleAppComponent);
        }
    }
});
//# sourceMappingURL=SampleAppComponent.js.map