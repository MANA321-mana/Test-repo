console.log(a);

const mapper =[
    {
        "__typename": "Aggregation",
        "attribute_code": "price",
        "count": 5,
        "label": "Price",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 3,
                "label": "3000-4000",
                "value": "3000_4000"
            },
            {
                "__typename": "AggregationOption",
                "count": 1,
                "label": "4000-5000",
                "value": "4000_5000"
            },
            {
                "__typename": "AggregationOption",
                "count": 2,
                "label": "5000-6000",
                "value": "5000_6000"
            },
            {
                "__typename": "AggregationOption",
                "count": 2,
                "label": "7000-8000",
                "value": "7000_8000"
            },
            {
                "__typename": "AggregationOption",
                "count": 1,
                "label": "8000-9000",
                "value": "8000_9000"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "category_id",
        "count": 5,
        "label": "Category",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Computers",
                "value": "83"
            },
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Laptops",
                "value": "84"
            },
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Ongoing Promos",
                "value": "7225"
            },
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Shop all Customer Direct",
                "value": "8249"
            },
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Work From Home Essential Tech",
                "value": "8451"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "compelec_display_displaysize",
        "count": 2,
        "label": "Screen Size (inches)",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 4,
                "label": "15.6",
                "value": "988"
            },
            {
                "__typename": "AggregationOption",
                "count": 5,
                "label": "17.3",
                "value": "989"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "compelec_hardware_wlan",
        "count": 2,
        "label": "Wireless Networking",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Bluetooth 5.1",
                "value": "40945"
            },
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Intel Wi-Fi 6 AX201",
                "value": "41941"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "def_system_producttype",
        "count": 1,
        "label": "Product Types",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Laptops",
                "value": "57"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "def_general_brand",
        "count": 1,
        "label": "Brand",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "MSIWORK",
                "value": "30998"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "comp_software_operatingsystem",
        "count": 1,
        "label": "Operating System",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Windows 10 Professional",
                "value": "28560"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "compelec_displaydefinition",
        "count": 2,
        "label": "Screen Definition",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 7,
                "label": "Full High Definition",
                "value": "2001"
            },
            {
                "__typename": "AggregationOption",
                "count": 2,
                "label": "4K UHD",
                "value": "25513"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "comp_hardware_processorbrand",
        "count": 1,
        "label": "Processor Brand",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Intel",
                "value": "1761"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "comp_hardware_processortype",
        "count": 1,
        "label": "Processor Type",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 9,
                "label": "Intel Core i7",
                "value": "1767"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "comp_hardware_processorspeed",
        "count": 2,
        "label": "Processor Speed (GHz)",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 3,
                "label": "2.30",
                "value": "1796"
            },
            {
                "__typename": "AggregationOption",
                "count": 3,
                "label": "2.60",
                "value": "1808"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "comp_hardware_ram",
        "count": 2,
        "label": "Installed RAM",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 5,
                "label": "16GB",
                "value": "1907"
            },
            {
                "__typename": "AggregationOption",
                "count": 4,
                "label": "32GB",
                "value": "17351"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "compelect_hardware_disktype",
        "count": 2,
        "label": "Storage Type",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 7,
                "label": "1TB NVMe PCleGen3x4 SSD",
                "value": "39906"
            },
            {
                "__typename": "AggregationOption",
                "count": 2,
                "label": "512GB NVMe PCle Gen3x4 SSD +1TB (SATA) 7200rpm",
                "value": "39907"
            }
        ]
    },
    {
        "__typename": "Aggregation",
        "attribute_code": "compelec_hardware_disksize",
        "count": 2,
        "label": "Primary Storage Capacity",
        "options": [
            {
                "__typename": "AggregationOption",
                "count": 2,
                "label": "512GB",
                "value": "22811"
            },
            {
                "__typename": "AggregationOption",
                "count": 7,
                "label": "1TB",
                "value": "1063"
            }
        ]
    }
]



 const  af = "compelec_hardware_wlan:40945 compelec_hardware_wlan:41941 comp_software_operatingsystem:28560";

//  "attribute_code : options[0].value"
//        "attribute_code" ---> "label"
//        options[0].value --->  "label"

//OUTPUT ---> [WIRELESS NETWORKING : BLUETOOTH 5.1,INTEL WI-FI 6 AX201,  OPERATING SYSTEM : WINDOWS 10 PROFESSIONAL]

// {
//     WIRELESS NETWORKING:[BLUETOOTH 5.1,INTEL WI-FI 6 AX201],
//     OPERATING SYSTEM : WINDOWS 10 PROFESSIONAL
// }


const attr = mapper.reduce((acc,crr)=>{
    acc[crr.attribute_code] = crr.label;
    return acc;
},{})

const option = mapper.reduce((acc,crr)=>{
    crr.options.forEach(element => {
         acc[element.value] = element.label;
    });
    return acc;
},{})

let k = af.split(' ');

const output = k.reduce((acc,crr)=>{
    let select = crr.split(':');
    if(!acc[attr[select[0]]]){
    acc[attr[select[0]]] =option[select[1]];
    }else{
    acc[attr[select[0]]] = acc[attr[select[0]]].concat(","+option[select[1]]);
    }
    return acc;
},{});

let result=[];
for(let key in output){
    result.push(`${key}:${output[key]}`);
}
console.log(result);


// console.log(option);


