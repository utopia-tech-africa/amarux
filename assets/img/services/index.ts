import serviceAdr from "./service-adr.png";
import serviceMortgage from "./service-mortgage.png";
import serviceParalegal from "./service-paralegal.png";
import serviceProperty from "./service-property.png";

export const SERVICE_IMAGES = {
  property: serviceProperty,
  mortgage: serviceMortgage,
  adr: serviceAdr,
  paralegal: serviceParalegal,
} as const;
