import request from "supertest";
import express, { Application } from "express";
import { Routers } from "../src/common.router";
import * as UserService from "../src/services/user.service";

jest.mock("../src/services/user.service");
const app: Application = express();
app.use(express.json());
app.use("/", Routers);

describe("User Controller", () => {
  it("should create a new user", async () => {
    const userData = {
      email: "test@example.com",
      name: "test One",
      age: 24,
      city: "City One hello",
      zipCode: "111111",
      password: "123123123",
    };
    (UserService.createNewUser as jest.Mock).mockResolvedValue({ ...userData });
    const response = await request(app).post("/create").send(userData);
    expect(response.status).toBe(200);
  });

  it("should get user by id", async () => {
    const mockUser = {
      _id: "1",
      email: "user1@example.com",
      name: "User One",
      age: 20,
      city: "City One",
      zipCode: "123123",
      password: "123456",
    };

    (UserService.getUser as jest.Mock).mockResolvedValue(mockUser);
    const response = await request(app).get("/worko/user/1");
    expect(response.status).toBe(200);
    expect(response.body.response.message).toEqual(mockUser);
  });

  it("should list all users", async () => {
    const mockUsers = [
      {
        _id: "1",
        email: "test1@example.com",
        name: "Test One",
        age: 20,
        city: "City One",
        zipCode: "232323",
        password: "123456",
      },
      {
        _id: "2",
        email: "test2@example.com",
        name: "Test Two",
        age: 30,
        city: "City Two",
        zipCode: "232323",
        password: "123456",
      },
    ];

    (UserService.getUsers as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app).get("/get_users");
    expect(response.status).toBe(200);
    expect(response.body.response.message).toEqual(mockUsers);
  });

  it("should update user using put method", async () => {
    const mockUsers = [
      {
        id: "1",
        email: "user1@example.com",
        name: "User One",
        age: 20,
        city: "City One",
        zipCode: "123123",
        password: "123456",
      },
    ];

    const userData = {
      id: "1",
      email: "user1@example.com",
      name: "User One",
      age: 20,
      city: "City One",
      zipCode: "123123",
      password: "123456",
    };

    (UserService.updateUser as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app).put("/update").send(userData);
    expect(response.status).toBe(200);

    expect(response.body.response.message[0]).toEqual(userData);
  });
});
