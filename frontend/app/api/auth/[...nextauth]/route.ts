import NextAuth, { AuthOptions, Account, User as AuthUser } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// // из БД
// import User from "DataBase";
// import connect from "DataBase";

export const authConfig: AuthOptions = {
  // Провайдеры
  providers: [
    // Провайдер для обычной регистрации Email + Password
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();

        // Обработка запроса к бд
        try {
          // ищем введенного юзера
          const user = User.findOne({ email: credentials.email });
          if (user) {
            // бикриптим и проверяем равны или нет
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (e: any) {
          throw new Error(e);
        }
      },
    }),

    // Провайдер для GitHub
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
