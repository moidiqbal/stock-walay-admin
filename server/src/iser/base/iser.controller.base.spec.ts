import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { IserController } from "../iser.controller";
import { IserService } from "../iser.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  balance: 42.42,
  bank: "exampleBank",
  bio: "exampleBio",
  charges: 42.42,
  city: "exampleCity",
  country: "exampleCountry",
  created_At: new Date(),
  email: "exampleEmail",
  iBan: "exampleIBan",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  password: "examplePassword",
  phone: "examplePhone",
  status: "true",
  updated_at: new Date(),
};
const CREATE_RESULT = {
  balance: 42.42,
  bank: "exampleBank",
  bio: "exampleBio",
  charges: 42.42,
  city: "exampleCity",
  country: "exampleCountry",
  created_At: new Date(),
  email: "exampleEmail",
  iBan: "exampleIBan",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  password: "examplePassword",
  phone: "examplePhone",
  status: "true",
  updated_at: new Date(),
};
const FIND_MANY_RESULT = [
  {
    balance: 42.42,
    bank: "exampleBank",
    bio: "exampleBio",
    charges: 42.42,
    city: "exampleCity",
    country: "exampleCountry",
    created_At: new Date(),
    email: "exampleEmail",
    iBan: "exampleIBan",
    id: "exampleId",
    image: "exampleImage",
    name: "exampleName",
    password: "examplePassword",
    phone: "examplePhone",
    status: "true",
    updated_at: new Date(),
  },
];
const FIND_ONE_RESULT = {
  balance: 42.42,
  bank: "exampleBank",
  bio: "exampleBio",
  charges: 42.42,
  city: "exampleCity",
  country: "exampleCountry",
  created_At: new Date(),
  email: "exampleEmail",
  iBan: "exampleIBan",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  password: "examplePassword",
  phone: "examplePhone",
  status: "true",
  updated_at: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Iser", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IserService,
          useValue: service,
        },
      ],
      controllers: [IserController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /isers", async () => {
    await request(app.getHttpServer())
      .post("/isers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created_At: CREATE_RESULT.created_At.toISOString(),
        updated_at: CREATE_RESULT.updated_at.toISOString(),
      });
  });

  test("GET /isers", async () => {
    await request(app.getHttpServer())
      .get("/isers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created_At: FIND_MANY_RESULT[0].created_At.toISOString(),
          updated_at: FIND_MANY_RESULT[0].updated_at.toISOString(),
        },
      ]);
  });

  test("GET /isers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/isers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /isers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/isers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created_At: FIND_ONE_RESULT.created_At.toISOString(),
        updated_at: FIND_ONE_RESULT.updated_at.toISOString(),
      });
  });

  test("POST /isers existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/isers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created_At: CREATE_RESULT.created_At.toISOString(),
        updated_at: CREATE_RESULT.updated_at.toISOString(),
      })
      .then(function () {
        agent
          .post("/isers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
