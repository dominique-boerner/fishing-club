import { IResponse } from "../../../../../libs/fishing-club-types/src/lib/response.interface";
import { HttpStatus } from '@nestjs/common';

export class ResponseOk implements IResponse {
  status = HttpStatus.OK;
}
