export interface IInvestment {
    _id:   string;
    value: IValue;
}

export interface IValue {
    Name:              string;
    AllocationRegion:  IAllocation[];
    AllocationCountry: IAllocation[];
    RiskLevel:         number;
    Category:          string;
    Advisor:           string;
    InvestmentFee:     number;
    Performance:       IPerformance[];
}

export interface IAllocation {
    Value: number;
    Key:   string;
}

export interface IPerformance {
    Value: number;
    Date:  Date;
}
