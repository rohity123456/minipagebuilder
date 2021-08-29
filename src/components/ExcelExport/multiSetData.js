import { formatDate, addComma } from "./utils";

const bordersHeader = {
  top: { style: "thick" },
  bottom: { style: "thick" },
  left: { style: "thick" },
  right: { style: "thick" },
};
const borders = {
  top: { style: "thin" },
  bottom: { style: "thin" },
  left: { style: "thin" },
  right: { style: "thin" },
};
const style = { border: bordersHeader, font: { bold: true } };
const alignmentRight = {
  horizontal: "right",
};
export const getFXMultiDataSet = (data: any): MultiDataSet => {
  return [
    {
      columns: [
        {
          title: "CUSTOMER NAME",
          width: { wch: 40 },
          style,
        },
        {
          title: "DEAL ID",
          width: { wch: 25 },
          style,
        },
        {
          title: "DEAL DATE",
          width: { wch: 15 },
          style,
        },
        {
          title: "FX SUBTYPE",
          width: { wch: 15 },
          style,
        },
        {
          title: "CURRENCY BOUGHT",
          width: { wch: 20 },
          style,
        },
        {
          title: "CURRENCY SOLD",
          width: { wch: 20 },
          style,
        },
        {
          title: "AMOUNT BOUGHT IN AED",
          width: { wch: 25 },
          style,
        },
        {
          title: "AMOUNT SOLD IN AED",
          width: { wch: 25 },
          style,
        },
      ],
      data: data.map((record: any) => {
        const {
          customerName,
          dealId,
          dealDate,
          fxSubType,
          currencyBought,
          currencySold,
          amountBoughtInAed,
          amountSoldInAed,
        } = record || {};
        return [
          {
            value: customerName || "",
            style: { border: borders },
          },
          {
            value: dealId || "",
            style: { border: borders },
          },
          {
            value: formatDate(dealDate, "DD-MM-YYYY") || "",
            style: { border: borders },
          },
          {
            value: fxSubType || "",
            style: { border: borders },
          },
          {
            value: currencyBought || "",
            style: { border: borders },
          },
          {
            value: currencySold || "",
            style: { border: borders },
          },
          {
            value: addComma(amountBoughtInAed) || "",
            style: { border: borders, alignment: alignmentRight },
          },
          {
            value: addComma(amountSoldInAed) || "",
            style: { border: borders, alignment: alignmentRight },
          },
        ];
      }),
    },
  ];
};
export const getOutWardOrInwardFXMultiDataSet = (data: any, isOutward? : boolean | undefined): MultiDataSet => {
  return [
    {
      columns: [
        {
          title: "CUSTOMER NAME",
          width: { wch: 40 },
          style,
        },
        {
          title: "TRANSACTION DATE",
          width: { wch: 25 },
          style,
        },
        {
          title: "CHANNEL",
          width: { wch: 20 },
          style,
        },
        {
          title: "DEBIT CURRENCY",
          width: { wch: 20 },
          style,
        },
        {
          title: "DEBIT AMOUNT IN LCY",
          width: { wch: 30 },
          style,
        },
        {
          title: "DEBIT AMOUNT IN FCY",
          width: { wch: 30 },
          style,
        },
        {
          title: "CREDIT CURRENCY",
          width: { wch: 20 },
          style,
        },
        {
          title: "CREDIT AMOUNT IN LCY",
          width: { wch: 30 },
          style,
        },
        {
          title: "CREDIT AMOUNT IN FCY",
          width: { wch: 30 },
          style,
        },
        {
          title: isOutward ? "BENEFICIARY NAME" : "SENDER NAME",
          width: { wch: 35 },
          style,
        },
        {
          title: isOutward ? "BENEFICIARY BANK (RECEIVING BANK)" : "SENDER BANK",
          width: { wch: 35 },
          style,
        },
        {
          title: "PURPOSE OF PAYMENT",
          width: { wch: 45 },
          style,
        },
      ],
      data: data.map((record: any = {}) => {
        const {
          customerName,
          channel,
          debitCurrency,
          debitAmountLCY,
          debitAmountFCY,
          creditCurrency,
          creditAmountLCY,
          creditAmountFCY,
          purposeOfPayment,
        } = record;
        return [
          {
            value: customerName || "",
            style: { border: borders },
          },
          {
            value: formatDate(isOutward ? record.dated : record.transactionDate, "DD-MM-YYYY") || "",
            style: { border: borders },
          },
          {
            value: channel || "",
            style: { border: borders },
          },
          {
            value: debitCurrency || "",
            style: { border: borders },
          },
          {
            value: addComma(debitAmountLCY) || "",
            style: { border: borders, alignment: alignmentRight },
          },
          {
            value: addComma(debitAmountFCY) || "",
            style: { border: borders, alignment: alignmentRight },
          },
          {
            value: creditCurrency || "",
            style: { border: borders },
          },
          {
            value: addComma(creditAmountLCY) || "",
            style: { border: borders, alignment: alignmentRight },
          },
          {
            value: addComma(creditAmountFCY) || "",
            style: { border: borders, alignment: alignmentRight },
          },
          {
            value: (isOutward ? record?.beneficiaryName : record.senderName ) || "",
            style: { border: borders },
          },
          {
            value: (isOutward ? record?.receiverBankName : record.senderBank ) || "",
            style: { border: borders },
          },
          {
            value: purposeOfPayment || "",
            style: { border: borders },
          },
        ];
      }),
    },
  ];
};
export const getExportImportLCMultiDataSet = (data: any): MultiDataSet => {
  return [
    {
      columns: [
        {
          title: "CUSTOMER NAME",
          width: { wch: 40 },
          style,
        },
        {
          title: "LC REF NUMBER",
          width: { wch: 25 },
          style,
        },
        {
          title: "LC AMOUNT",
          width: { wch: 25 },
          style,
        },
        {
          title: "LC CURRENCY",
          width: { wch: 25 },
          style,
        },
        {
          title: "ISSUE DATE",
          width: { wch: 25 },
          style,
        },
        {
          title: "MATURITY/EXPIRY DATE",
          width: { wch: 25 },
          style,
        },
        {
          title: "BENEFICIARY NAME",
          width: { wch: 25 },
          style,
        },
        {
          title: "APPLICANT",
          width: { wch: 25 },
          style,
        },
        
      ],
      data: data.map((record: any) => {
        const {
          customerName,
          lcRefNumber,
          lcAmount,
          lcCurrency,
          issueDate,
          expiryDate,
          beneficiaryName,
          applicant
        } = record || {};
        return [
          {
            value: customerName || "",
            style: { border: borders },
          },
          {
            value: lcRefNumber || "",
            style: { border: borders },
          },
          {
            value: addComma(lcAmount) || "",
            style: { border: borders, alignment: alignmentRight },
          },
          {
            value: lcCurrency || "",
            style: { border: borders },
          },
          {
            value: formatDate(issueDate, "DD-MM-YYYY") || "",
            style: { border: borders },
          },
          {
            value: formatDate(expiryDate, "DD-MM-YYYY") || "",
            style: { border: borders },
          },
          {
            value: beneficiaryName || "",
            style: { border: borders },
          },
          {
            value: applicant || "",
            style: { border: borders },
          },
        ];
      }),
    },
  ];
};

const sheetNames = {
    FX:"FX",
    OUTWORD:"Outward",
    INWARD:"Inward",
    IMPORT_LC:"Import LC",
    EXPORT_LC:"Export LC"
}

export const getSheetDataForAllTables = (data : any) : Array<SheetData> => [
    {
        sheetName : sheetNames.FX,
        sheetData : getFXMultiDataSet(data[sheetNames.FX])
    },
    {
        sheetName : sheetNames.OUTWORD,
        sheetData : getOutWardOrInwardFXMultiDataSet(data[sheetNames.OUTWORD], true)
    },
    {
        sheetName : sheetNames.INWARD,
        sheetData : getOutWardOrInwardFXMultiDataSet(data[sheetNames.INWARD])
    },
    {
        sheetName : sheetNames.IMPORT_LC,
        sheetData : getExportImportLCMultiDataSet(data[sheetNames.IMPORT_LC])
    },
    {
        sheetName : sheetNames.EXPORT_LC,
        sheetData : getExportImportLCMultiDataSet(data[sheetNames.EXPORT_LC])
    },
    
]


export const getSheetDataForFX = (data : any) : Array<SheetData> => [
    {
        sheetName : sheetNames.FX,
        sheetData : getFXMultiDataSet(data[sheetNames.FX])
    }
    
]


//sender name and channel in inward
//transaction date in FX 
//transaction date in Inward 
//applicant in import/export