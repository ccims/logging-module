"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLoggingService = void 0;
const common_1 = require("@nestjs/common");
let IssueLoggingService = class IssueLoggingService {
    constructor(http) {
        this.http = http;
        this.issueCreatorUrl = "http://localhost:3500";
    }
    log(log) {
        this.http.post(`${this.issueCreatorUrl}`, JSON.parse(JSON.stringify(log))).subscribe(res => console.log("Log reported"), err => console.log("ERROR when reporting log"));
    }
};
IssueLoggingService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], IssueLoggingService);
exports.IssueLoggingService = IssueLoggingService;
//# sourceMappingURL=logging.service.js.map