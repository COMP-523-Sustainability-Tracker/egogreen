"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

/***/ "./src/app/item/items.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemsComponent: () => (/* binding */ ItemsComponent)
/* harmony export */ });
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/item/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2022/nativescript-angular.mjs");




const _c0 = function (a1) { return ["/item", a1]; };
function ItemsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "StackLayout", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "Label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", item_r1.name);
} }
class ItemsComponent {
    constructor(itemService) {
        this.itemService = itemService;
    }
    ngOnInit() {
        this.items = this.itemService.getItems();
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["ns-items"]], decls: 4, vars: 1, consts: [["title", "EgoGreen"], [3, "items"], [3, "nsRouterLink"], [3, "text"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "GridLayout")(2, "ListView", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ItemsComponent_ng_template_3_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items);
    } }, dependencies: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ListViewComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NSRouterLink], encapsulation: 2 });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjQ5MGM2NzQzMmI4MmQ0MDI2M2Y4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1Q7QUFDQztBQUNPO0FBQzVDLDRCQUE0QjtBQUM1QiwwREFBMEQ7QUFDMUQsSUFBSSw0REFBaUI7QUFDckIsSUFBSSx1REFBWTtBQUNoQixJQUFJLDBEQUFlO0FBQ25CLEVBQUU7QUFDRjtBQUNBLElBQUksd0RBQWEsaUJBQWlCLDZEQUFrQjtBQUNwRCxJQUFJLHVEQUFZO0FBQ2hCLElBQUksd0RBQWE7QUFDakI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGlDQUFpQywrREFBb0IsQ0FBQyxzREFBYztBQUMvSCxvQ0FBb0MsK0RBQW9CLEdBQUcsMk1BQTJNO0FBQ3RRLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYTtBQUNyQixRQUFRLDBEQUFlO0FBQ3ZCLE1BQU07QUFDTixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsT0FBTyxpQkFBaUIscUVBQXFCLEVBQUUsb0VBQW9CLEVBQUUsK0RBQWUscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWdvZ3JlZW4vLi9zcmMvYXBwL2l0ZW0vaXRlbXMuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuY29uc3QgX2MwID0gZnVuY3Rpb24gKGExKSB7IHJldHVybiBbXCIvaXRlbVwiLCBhMV07IH07XG5mdW5jdGlvbiBJdGVtc0NvbXBvbmVudF9uZ190ZW1wbGF0ZV8zX1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJTdGFja0xheW91dFwiLCAyKTtcbiAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIkxhYmVsXCIsIDMpO1xuICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG59IGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBpdGVtX3IxID0gY3R4Lml0ZW07XG4gICAgaTAuybXJtXByb3BlcnR5KFwibnNSb3V0ZXJMaW5rXCIsIGkwLsm1ybVwdXJlRnVuY3Rpb24xKDIsIF9jMCwgaXRlbV9yMS5pZCkpO1xuICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcInRleHRcIiwgaXRlbV9yMS5uYW1lKTtcbn0gfVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtU2VydmljZSkge1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlID0gaXRlbVNlcnZpY2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cbn1cbkl0ZW1zQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gSXRlbXNDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSXRlbXNDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTEuSXRlbVNlcnZpY2UpKTsgfTtcbkl0ZW1zQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogSXRlbXNDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIm5zLWl0ZW1zXCJdXSwgZGVjbHM6IDQsIHZhcnM6IDEsIGNvbnN0czogW1tcInRpdGxlXCIsIFwiRWdvR3JlZW5cIl0sIFszLCBcIml0ZW1zXCJdLCBbMywgXCJuc1JvdXRlckxpbmtcIl0sIFszLCBcInRleHRcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gSXRlbXNDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEsIFwiR3JpZExheW91dFwiKSgyLCBcIkxpc3RWaWV3XCIsIDEpO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMywgSXRlbXNDb21wb25lbnRfbmdfdGVtcGxhdGVfM19UZW1wbGF0ZSwgMiwgNCwgXCJuZy10ZW1wbGF0ZVwiKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKSgpO1xuICAgIH0gaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwiaXRlbXNcIiwgY3R4Lml0ZW1zKTtcbiAgICB9IH0sIGRlcGVuZGVuY2llczogW2kyLkFjdGlvbkJhckNvbXBvbmVudCwgaTIuTGlzdFZpZXdDb21wb25lbnQsIGkyLk5TUm91dGVyTGlua10sIGVuY2Fwc3VsYXRpb246IDIgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=