// import z, { email } from 'zod';

// const schema = z.object({
//     name: z.string().min(2),
//     email: z.string().email(),
//     age: z.number().min(18).max(120),
//     status: z.boolean(),
//     characteristics: z.array(
//         z.object({
//             name: z.string(),
//             value: z.number()
//         })
//     )
// });

// type User = z.infer<typeof schema>;


// let data = {
//     name: "Jose Marques",
//     email: "jfmsouza@gmail.com",
//     age: 58,
//     status: true,
//     characteristics: [
//         { name: 'Mana', value: 10 },
//         { name: "Shielding", value: 100 }
//     ]
// }


// const result = schema.safeParse(data);
// if (result.success) {
//     console.log("Deu tudo certo, pode continuar...");
//     console.log(result.data)
// } else {
//     console.log("Deu erro, verifica os dados");
// }

// Exercícios abaixo a partir da aula Zod: Primitivos

import { z } from 'zod';

const pattern = z.string();

const result = pattern.parse("Jose Marques");

console.log(result);


