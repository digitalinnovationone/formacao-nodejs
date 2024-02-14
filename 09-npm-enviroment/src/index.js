import connectToDatabase from "./database/data.js";

async function main() {
  await connectToDatabase(
    process.env.USERDATABASE,
    process.env.PASSWORDDATABASE
  );
}

main();
