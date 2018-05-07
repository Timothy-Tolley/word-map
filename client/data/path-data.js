const finalMessage = ''

// TEMPLATE
// const template = [{
//   label: '',
//   options: [
//     {
//       title: '',
//       description: '',
//       responses: nextStep
//     },
//     {
//       title: '',
//       description: '',
//       responses: nextStep
//     }]
// }]

// Eigth Level

// Seventh Level

// Sixth Level

// Fifth Level

// Forth Level

// Third Level

// Second Level
export const posAdminResp = []
export const webAppResp = [
  {
    label: 'work in field - gain 5 yrs experience',
    options: [
      {
        title: 'SENIOR DEVELOPER',
        description: 'I lead web app and online tool projects for the company to use',
        responses: finalMessage
      },
      {
        title: 'DIGITAL MARKETING LEAD',
        description: 'I create digital marketing campaigns and manage influencers',
        responses: finalMessage
      },
      {
        title: 'STRATEGY DESIGNER',
        description: 'I use analytics and data to design systems to sell more for the company',
        responses: finalMessage
      }
    ]
  }
]
export const wareSuperResp = []
export const trainManagerResp = []
export const credControlResp = []
export const accRecievResp = []
export const accPayableResp = []

// First Level
export const accDegResp = []
export const busDegResp = []
export const itDegResp = [{
  label: '',
  options: [
    {
      title: 'POS ADMINISTRATOR',
      description: 'Manage in-store and online point of sale system',
      responses: posAdminResp
    },
    {
      title: 'WEB APPLICATIONS',
      description: 'Creating and managing online stores and marketing',
      responses: webAppResp
    }]
}]
export const hrDegResp = []
export const warehousingResp = [{
  label: '',
  options: [
    {
      title: 'WAREHOUSE SUPERVISOR',
      description: 'Creating and managing online stores and marketing',
      responses: wareSuperResp
    }
  ]
}]
export const receptionResp = []
export const shopFloorResp = [{
  label: '',
  options: [
    {
      title: 'TRAINEE MANAGER',
      description: 'Creating and managing online stores and marketing',
      responses: trainManagerResp
    }]
}]
export const DataEntryResp = [{
  label: '',
  options: [
    {
      title: 'CREDIT CONTROL',
      description: 'Creating and managing online stores and marketing',
      responses: credControlResp
    },
    {
      title: 'ACCOUNTS RECEIVABLE',
      description: 'Creating and managing online stores and marketing',
      responses: accRecievResp
    },
    {
      title: 'ACCOUNTS PAYABLE',
      description: 'Creating and managing online stores and marketing',
      responses: accPayableResp
    }]
}]

// baseLevel
export const baseLevel = [
  {
    label: 'HIGHER EDUCATION',
    options: [
      {
        title: 'ACCOUNTING DEGREE',
        description: 'I like working with numbers and problem solving',
        responses: accDegResp
      },
      {
        title: 'BUSINESS DEGREE',
        description: 'I like challenges and growing a project being efficient being efficient',
        responses: busDegResp
      },
      {
        title: 'IT DEGREE',
        description: 'I like working with computers and the internet',
        responses: itDegResp
      },
      {
        title: 'HUMAN RESOURCES DEGREE',
        description: 'I like working with people and managing projects',
        responses: hrDegResp
      }
    ]
  },
  {
    label: 'WORK IN THE FIELD',
    options: [
      {
        title: 'WAREHOUSING',
        description: 'I like making efficient systems and like fitness',
        responses: warehousingResp
      },
      {
        title: 'RECEPTION',
        description: 'I like helping people and being efficient being efficient being efficient',
        responses: receptionResp
      },
      {
        title: 'SHOP FLOOR',
        description: 'I like being in a retail environment and making sales',
        responses: shopFloorResp
      },
      {
        title: 'DATA ENTRY',
        description: 'I like working with numbers and being given tasks',
        responses: DataEntryResp
      }
    ]
  }
]
