import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_2/Components/my_button.dart';
import 'package:flutter_application_2/Components/my_textfield.dart';
import 'package:flutter_application_2/Components/square_tile.dart';

class RegisterPage extends StatefulWidget {
  final Function()? onTap;
  RegisterPage({super.key, required this.onTap});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
//text editing controller
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final confirmpasswordController = TextEditingController();

//sing user Up
  void SingUserUp() async {
    showDialog(
      context: context,
      builder: (context) {
        return const Center(
          child: CircularProgressIndicator(),
        );
      },
    );
//try creating user
    try {
      // check if password is same as confirm password
      if (passwordController.text == confirmpasswordController.text) {
        await FirebaseAuth.instance.createUserWithEmailAndPassword(
          email: emailController.text,
          password: passwordController.text,
        );
      } else {
        // show error massage password dont match
        ShowErrorMessage("!رمز عبود متابفت ندارد");
      }
      Navigator.pop(context);
    } on FirebaseAuthException catch (e) {
      //pop circle
      Navigator.pop(context);
      //show error message
      ShowErrorMessage(e.code);
    }
  }

//Error message to user
  void ShowErrorMessage(String message) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: Colors.deepPurple,
          title: Center(
            child: Text(
              message,
              style: const TextStyle(color: Colors.white),
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[300],
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            child:
                Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              const SizedBox(
                height: 10,
              ),

              //logo
              const Icon(
                Icons.lock,
                size: 75,
              ),

              const SizedBox(
                height: 40,
              ),

              //welcomeback, you've been missed
              Text(
                '.بیایید یک حساب جدید ایجاد کنیم',
                style: TextStyle(
                  color: Colors.grey[700],
                  fontSize: 16,
                  fontFamily: "Vazir",
                ),
              ),

              const SizedBox(height: 25),

              //Email textfield
              Mytextfield(
                controller: emailController,
                hintText: 'Email',
                obsecureText: false,
              ),

              const SizedBox(
                height: 10,
              ),
              //password textfield

              Mytextfield(
                controller: passwordController,
                hintText: 'Password',
                obsecureText: true,
              ),

              const SizedBox(
                height: 10,
              ),

              //confirm password textfield
              Mytextfield(
                controller: confirmpasswordController,
                hintText: 'ConfirmPassword',
                obsecureText: true,
              ),

              const SizedBox(
                height: 10,
              ),
              //sing in button

              MyButton(
                text: "ثبت نام",
                onTap: SingUserUp,
              ),
              const SizedBox(
                height: 50,
              ),
              //or countinio with

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  children: [
                    Expanded(
                      child: Divider(
                        thickness: 0.5,
                        color: Colors.grey[400],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 10),
                      child: Text(
                        'یا ادامه دادن با',
                        style: TextStyle(
                            color: Colors.grey[700], fontFamily: "Vazir"),
                      ),
                    ),
                    Expanded(
                      child: Divider(
                        thickness: 0.5,
                        color: Colors.grey[400],
                      ),
                    )
                  ],
                ),
              ),
              const SizedBox(
                height: 50,
              ),
              // google + apple
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  SquareTile(imagePath: "assets/images/google.png"),
                  SizedBox(
                    width: 25,
                  ),
                  SquareTile(imagePath: "assets/images/facebook.png"),
                ],
              ),

              //not remember? register now
              const SizedBox(
                height: 50,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  GestureDetector(
                    onTap: widget.onTap,
                    child: const Text(
                      "اکنون وارد شوید",
                      style: TextStyle(
                          color: Colors.blue,
                          fontWeight: FontWeight.bold,
                          fontFamily: "Sahel"),
                    ),
                  ),
                  const SizedBox(width: 4),
                  Text(
                    'حسابی از قبل دارید؟',
                    style:
                        TextStyle(color: Colors.grey[700], fontFamily: "Sahel"),
                  )
                ],
              )
            ]),
          ),
        ),
      ),
    );
  }
}
