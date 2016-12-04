System.register(['@angular/core', '@angular/router', './crisis-center-home.component', './crisis-list.component', './crisis-center.component', './crisis-detail.component', '../can-deactivate-guard.service', './crisis-detail-resolve.service'], function(exports_1, context_1) {
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
    var core_1, router_1, crisis_center_home_component_1, crisis_list_component_1, crisis_center_component_1, crisis_detail_component_1, can_deactivate_guard_service_1, crisis_detail_resolve_service_1;
    var crisisCenterRoutes, CrisisCenterRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crisis_center_home_component_1_1) {
                crisis_center_home_component_1 = crisis_center_home_component_1_1;
            },
            function (crisis_list_component_1_1) {
                crisis_list_component_1 = crisis_list_component_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (crisis_detail_component_1_1) {
                crisis_detail_component_1 = crisis_detail_component_1_1;
            },
            function (can_deactivate_guard_service_1_1) {
                can_deactivate_guard_service_1 = can_deactivate_guard_service_1_1;
            },
            function (crisis_detail_resolve_service_1_1) {
                crisis_detail_resolve_service_1 = crisis_detail_resolve_service_1_1;
            }],
        execute: function() {
            crisisCenterRoutes = [
                {
                    path: '',
                    component: crisis_center_component_1.CrisisCenterComponent,
                    children: [
                        {
                            path: '',
                            component: crisis_list_component_1.CrisisListComponent,
                            children: [
                                {
                                    path: ':id',
                                    component: crisis_detail_component_1.CrisisDetailComponent,
                                    canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                                    resolve: {
                                        crisis: crisis_detail_resolve_service_1.CrisisDetailResolve
                                    }
                                },
                                {
                                    path: '',
                                    component: crisis_center_home_component_1.CrisisCenterHomeComponent
                                }
                            ]
                        }
                    ]
                }
            ];
            CrisisCenterRoutingModule = (function () {
                function CrisisCenterRoutingModule() {
                }
                CrisisCenterRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forChild(crisisCenterRoutes)
                        ],
                        exports: [
                            router_1.RouterModule
                        ],
                        providers: [
                            crisis_detail_resolve_service_1.CrisisDetailResolve
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CrisisCenterRoutingModule);
                return CrisisCenterRoutingModule;
            }());
            exports_1("CrisisCenterRoutingModule", CrisisCenterRoutingModule);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-center-routing.module.js.map