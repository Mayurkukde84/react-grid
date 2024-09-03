import { useState } from "react";
import { faker } from "@faker-js/faker";
import "react-data-grid/lib/styles.css";

import DataGrid, { SelectColumn, textEditor } from "react-data-grid";

const highlightClassname = `
  .rdg-cell {
    background-color: #fffffff;
    color: white;
  }

  &:hover .rdg-cell {
    background-color: #ffffff;
  }
`;

function rowKeyGetter(row) {
  return row.id;
}

const columns = [
  SelectColumn,
  {
    key: "id",
    name: "ID",
    width: 80,
    resizable: true,
    frozen: true,
  },
  {
    name: "Details",
    
    children: [
      {
        key: "location",
        name: "Location",
        width: 80,
        resizable: true,
        frozen: true
      },
      {
        key: "vehicleType",
        name: "Vehicle Type",
        width: 200,
        resizable: true,
        frozen: true
      },
      {
        key: "vehicleModel",
        name: "Vehicle Model",
        width: 200,
        resizable: true,
        renderEditCell: textEditor,
        frozen: true
      },
      {
        key: "seatingCapacity",
        name: "Seating Capacity",
        width: 200,
        resizable: true,
        renderEditCell: textEditor,
        frozen: true
      },
      {
        key: "smallLuggageCapacity",
        name: "Small Luggage Capacity",
        width: "max-content",
        resizable: true,
        renderEditCell: textEditor,
        frozen: true
      },
      {
        key: "bigLuggageCapacity",
        name: "Big Luggage Capacity",
        width: 200,
        resizable: true,
        renderEditCell: textEditor,
        frozen: true
      },
    ],
  },

  {
    name: "Rate in Local Currency",
    children: [
      {
        name: "At Disposal",
        children: [
          {
            key: "oneHrTenKm",
            name: "1Hr/10km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "twoHrsTwentyKm",
            name: "2Hr/20km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "threeHrsThirtyKm",
            name: "3Hr/30km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "fourHrsFortyKm",
            name: "4Hr/40km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "fiveHrsFiftyKm",
            name: "5Hr/50km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "sixHrsSixtyKm",
            name: "6Hr/60km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "sevenHrsSeventyKm",
            name: "7Hr/70km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "eightHrsEightyKm",
            name: "8Hr/80km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "nineHrsNinetyKm",
            name: "9Hr/90km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "tenHrsHundredKm",
            name: "10Hr/100km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "elevenHrsHundredTenKm",
            name: "11Hr/110km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "twelveHrsHundredTwentyKm",
            name: "12Hr/120km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "perHour",
            name: "Per Hour",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "perKm",
            name: "Per Km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "extraHour",
            name: "Extra Hour",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "extraKm",
            name: "Extra Km",
            width: 200,
            resizable: true,
            renderEditCell: textEditor,
          },
        ],
      },
      {
        name: "Airport Transfer Radius (editable km values)",
        children: [
          {
            key: "zeroToTwenty",
            name: "0-20",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "twentyToThirty",
            name: "20-30",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "thirtyToSixty",
            name: "30-60",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "sixtyToHundred",
            name: "60-100",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "hundredToFifty",
            name: "100-150",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "extraHourOutstation",
            name: "Extra Hour",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "extraKmOutstation",
            name: "Extra Km",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
        ],
      },
      {
        name: "Outstation",
        children: [
          {
            key: "maxKmDay",
            name: "Max. Km/Day",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "driverOutstationAllowance",
            name: "Driver Outstation Allowance/Day",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "perHour",
            name: "Per Hour",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "perKm",
            name: "Per Km",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "extraKm",
            name: "Extra Km",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "extraHour",
            name: "Extra Hour",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
        ],
      },
      {
        name: "Extras",
        children: [
          {
            key: "nightCharges",
            name: "Night Charges",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "waitingTimeHours",
            name: "Waiting time (Hrs)",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
          {
            key: "waitingCharges",
            name: "Waiting Charges",
            width: "max-content",
            resizable: true,
            renderEditCell: textEditor,
          },
        ],
      },
    ],
  },
];


// function createRows() {
//   const rows = [];

//   for (let i = 0; i < 2000; i++) {
//     rows.push({
//       id: `id_${i}`,
//       avatar: faker.image.avatar(),
//       email: faker.internet.email(),
//       title: faker.person.prefix(),
//       firstName: faker.person.firstName(),
//       lastName: faker.person.lastName(),
//       street: faker.location.street(),
//       zipCode: faker.location.zipCode(),
//       date: faker.date.past().toLocaleDateString(),
//       bs: faker.company.buzzPhrase(),
//       catchPhrase: faker.company.catchPhrase(),
//       companyName: faker.company.name(),
//       words: faker.lorem.words(),
//       sentence: faker.lorem.sentence(),
//     });
//   }

//   return rows;
// }

const Rows = [
  {
    location: "Delhi",
    vehicleType: "Sedan",
    vehicleModel: ["Honda", "Accord", "Hyundai"],
    seatingCapacity: "5",
    smallLuggageCapacity: "5",
    bigLuggageCapacity: "9",
    oneHrTenKm: "100", // Example value
    twoHrsTwentyKm: "200", // Example value
    threeHrsThirtyKm: "300", // Example value
    fourHrsFortyKm: "400", // Example value
    fiveHrsFiftyKm: "500", // Example value
    sixHrsSixtyKm: "600", // Example value
    sevenHrsSeventyKm: "700", // Example value
    eightHrsEightyKm: "800", // Example value
    nineHrsNinetyKm: "900", // Example value
    tenHrsHundredKm: "1000", // Example value
    elevenHrsHundredTenKm: "1100", // Example value
    twelveHrsHundredTwentyKm: "1200", // Example value
    perHour: "150", // Example value
    perKm: "20", // Example value
    extraHour: "50", // Example value
    extraKm: "10", // Example value
    zeroToTwenty: "100", // Example value
    twentyToThirty: "150", // Example value
    thirtyToSixty: "200", // Example value
    sixtyToHundred: "250", // Example value
    hundredToFifty: "300", // Example value
    extraHourOutstation: "60", // Example value
    extraKmOutstation: "15", // Example value
    maxKmDay: "500", // Example value
    driverOutstationAllowance: "1000", // Example value
    nightCharges: "500", // Example value
    waitingTimeHours: "2", // Example value
    waitingCharges: "50", // Example value
    email: "Gabriel_Hane@hotmail.com",
    firstName: "Kurt",
    id: "id_0",
    lastName: "Runte",
    sentence: "Ara acervus tui sonitus audio apostolus stipes.",
    street: "Trinity Road",
    title: "Mrs.",
    words: "speciosus soluta derideo",
    zipCode: "55783",
  },
];

// eslint-disable-next-line react/prop-types
export default function App({ direction }) {
  const [rows, setRows] = useState(Rows);
  console.log(rows);
  const [selectedRows, setSelectedRows] = useState(() => new Set());

  function handleFill({ columnKey, sourceRow, targetRow }) {
    return { ...targetRow, [columnKey]: sourceRow[columnKey] };
  }
  console.log(faker);

  function handlePaste({
    sourceColumnKey,
    sourceRow,
    targetColumnKey,
    targetRow,
  }) {
    const incompatibleColumns = ["email", "zipCode", "date"];
    if (
      sourceColumnKey === "avatar" ||
      ["id", "avatar"].includes(targetColumnKey) ||
      ((incompatibleColumns.includes(targetColumnKey) ||
        incompatibleColumns.includes(sourceColumnKey)) &&
        sourceColumnKey !== targetColumnKey)
    ) {
      return targetRow;
    }

    return { ...targetRow, [targetColumnKey]: sourceRow[sourceColumnKey] };
  }

  function handleCopy({ sourceRow, sourceColumnKey }) {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(sourceRow[sourceColumnKey]);
    }
  }

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      rowKeyGetter={rowKeyGetter}
      onRowsChange={setRows}
      onFill={handleFill}
      onCopy={handleCopy}
      onPaste={handlePaste}
      rowHeight={30}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      className="fill-grid "
      rowClass={(row, index) =>
        row.id.includes("7") || index === 0 ? highlightClassname : undefined
      }
      direction={direction}
      onCellClick={(args, event) => {
        if (args.column.key === "title") {
          event.preventGridDefault();
          args.selectCell(true);
        }
      }}
    />
  );
}
