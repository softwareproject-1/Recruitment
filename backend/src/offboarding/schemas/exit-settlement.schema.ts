import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum SettlementStatus {
  PENDING = 'Pending',
  CALCULATED = 'Calculated',
  APPROVED = 'Approved',
  PROCESSED = 'Processed'
}

@Schema({ timestamps: true })
export class ExitSettlement extends Document {
  @Prop({ type: Types.ObjectId, ref: 'OffboardingPlan', required: true })
  offboardingPlanId: Types.ObjectId;

  @Prop({ required: true })
  employeeId: string;

  @Prop({ default: 0 })
  unusedLeaveBalance: number;

  @Prop({ default: 0 })
  leaveEncashment: number;

  @Prop({ default: 0 })
  pendingDeductions: number;

  @Prop({ default: 0 })
  loanRecovery: number;

  @Prop({ default: 0 })
  severancePay: number;

  @Prop({ default: 0 })
  totalFinalPay: number;

  @Prop({ type: String, enum: SettlementStatus, default: SettlementStatus.PENDING })
  status: SettlementStatus;

  @Prop()
  calculatedBy: string;

  @Prop()
  calculatedDate: Date;

  @Prop()
  approvedBy: string;

  @Prop()
  approvedDate: Date;

  @Prop()
  processedDate: Date;

  @Prop()
  benefitsTerminationDate: Date;
}

export const ExitSettlementSchema = SchemaFactory.createForClass(ExitSettlement);
