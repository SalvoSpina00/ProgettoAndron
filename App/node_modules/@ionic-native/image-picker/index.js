var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePickerOriginal = /** @class */ (function (_super) {
    __extends(ImagePickerOriginal, _super);
    function ImagePickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePickerOriginal.prototype.getPictures = function (options) { return cordova(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePickerOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePickerOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePickerOriginal.pluginName = "ImagePicker";
    ImagePickerOriginal.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePickerOriginal.pluginRef = "window.imagePicker";
    ImagePickerOriginal.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePickerOriginal.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePickerOriginal.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePickerOriginal.platforms = ["Android", "iOS"];
    return ImagePickerOriginal;
}(IonicNativePlugin));
var ImagePicker = new ImagePickerOriginal();
export { ImagePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQW9EeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF3Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O3NCQWhJdkI7RUFnR2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heCBoZWlnaHQgdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgaW1hZ2VzLCBkZWZhdWx0cyB0byAxMDBcbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZpZGVvcyBhbGxvd2VkP1xuICAgKi9cbiAgYWxsb3dfdmlkZW8/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiB0aGUgZGVmYXVsdCBpcyB0aGUgbWVzc2FnZSBvZiB0aGUgb2xkIHBsdWdpbiBpbXBsXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIG9sZCBwbHVnaW4gaW1wbCBkaWRuJ3QgaGF2ZSBpdCwgc28gcGFzc2luZyBudWxsIGJ5IGRlZmF1bHRcbiAgICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gSW1hZ2VQaWNrZXIuT3V0cHV0VHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBGSUxFX1VSSSA6IDAsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIERBVEFfVVJMIDogMSwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gICAqL1xuICBvdXRwdXRUeXBlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBpT1MgcG9wb3ZlciBhcyBzZWVuIG9uIGlQYWRcbiAgICovXG4gIGRpc2FibGVfcG9wb3Zlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIE91dHB1dFR5cGUge1xuICBGSUxFX1VSTCA9IDAsXG4gIERBVEFfVVJMLFxufVxuXG4vKipcbiAqIEBuYW1lIEltYWdlIFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIFBsdWdpbiBGb3IgTXVsdGlwbGUgSW1hZ2UgU2VsZWN0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pbWFnZS1waWNrZXJgLlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9JbWFnZVBpY2tlclxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW1hZ2VQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ltYWdlLXBpY2tlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlUGlja2VyOiBJbWFnZVBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pbWFnZVBpY2tlci5nZXRQaWN0dXJlcyhvcHRpb25zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gKiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICogICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFVSSTogJyArIHJlc3VsdHNbaV0pO1xuICogICB9XG4gKiB9LCAoZXJyKSA9PiB7IH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEltYWdlUGlja2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ltYWdlUGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGVsZXJpay1pbWFnZXBpY2tlcicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5pbWFnZVBpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVsZXJpay1WZXJpZmllZC1QbHVnaW5zL0ltYWdlUGlja2VyJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXIgLS12YXJpYWJsZSBQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OPVwieW91ciB1c2FnZSBtZXNzYWdlXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlUGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUGljayBwaWN0dXJlcyBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0ltYWdlUGlja2VyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSBpbWFnZSBmaWxlIFVSSVxuICAgKiBvdGhlcndpc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0UGljdHVyZXMob3B0aW9uczogSW1hZ2VQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaGFzUmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIHJlcXVlc3RSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19