import 'dart:math';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_2/Pages/home_page.dart';
import 'package:flutter_application_2/Pages/list_view_page.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'package:lottie/lottie.dart';

class ChaharmahalPage extends StatefulWidget {
  @override
  State<ChaharmahalPage> createState() => _ChaharmahalPageState();
}

class _ChaharmahalPageState extends State<ChaharmahalPage> {
  var temp;
  var discription;
  var currently;
  var humidity;
  var windspeed;

  Future<void> getWeather() async {
    Uri url = Uri.parse(
        'https://api.openweathermap.org/data/2.5/weather?q=Yasuj&units=metric&appid=5360942d4f43add177f84f37183adf4d');
    http.Response response = await http.get(url);
    var result = jsonDecode(response.body);
    setState(() {
      this.temp = result['main']['temp'];
      this.discription = result['weather'][0]['description'];
      this.currently = result['weather'][0]['main'];
      this.humidity = result['main']['humidity'];
      this.windspeed = result['wind']['speed'];
    });
  }

  @override
  void initState() {
    super.initState();
    getWeather();
  }

  Widget _getWeatherImage(String? currently) {
    switch (currently) {
      case 'Clouds':
        return Lottie.asset('assets/animation/cloud.json',
            height: 110, width: 200);
      case 'Clear':
        return Lottie.asset('assets/animation/clear.json',
            height: 100, width: 200);
      case 'Drizzle':
        return Lottie.asset('assets/animation/drizzle.json',
            height: 100, width: 200);
      case 'Thunderstorm':
        return Lottie.asset('assets/animation/thunderstorm.json',
            height: 110, width: 200);
      case 'Snow':
        return Lottie.asset('assets/animation/snow.json',
            height: 100, width: 200);
      case 'Mist':
        return Lottie.asset('assets/animation/mist.json',
            height: 100, width: 200);
      case 'Fog':
        return Lottie.asset('assets/animation/mist.json',
            height: 110, width: 200);
      case 'Smoke':
        return Lottie.asset('assets/animation/mist.json',
            height: 100, width: 200);
      case 'Haze':
        return Lottie.asset('assets/animation/mist.json',
            height: 100, width: 200);
      case 'Dust':
        return Lottie.asset('assets/animation/mist.json',
            height: 110, width: 200);
      case 'Sand':
        return Lottie.asset('assets/animation/squall.json',
            height: 100, width: 200);
      case 'Ash':
        return Lottie.asset('assets/animation/fog.json',
            height: 100, width: 200);
      case 'Squall':
        return Lottie.asset('assets/animation/squall.json',
            height: 110, width: 200);
      case 'Tornado':
        return Lottie.asset('assets/animation/tornado.json',
            height: 100, width: 200);
      case 'Rain':
        return Lottie.asset('assets/animation/rain.json',
            height: 100, width: 200);
      default:
        return Lottie.asset('assets/animation/defualt.json',
            height: 100, width: 200);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 221, 244, 255),
      body: Column(
        children: [
          Stack(
            children: [
              Container(
                height: MediaQuery.of(context).size.height / 3,
                width: MediaQuery.of(context).size.width,
                color: Color.fromARGB(255, 62, 213, 226),
                child: SingleChildScrollView(
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const SizedBox(
                          height: 90,
                        ),
                        const Padding(
                          padding: EdgeInsets.only(bottom: 10),
                          child: Text(
                            "دمای کنونی هوا در چهارمحال و بختیاری",
                            style: TextStyle(
                                color: Colors.black,
                                fontFamily: 'Sahel',
                                fontSize: 14,
                                fontWeight: FontWeight.bold),
                          ),
                        ),
                        Text(
                          temp != null
                              ? temp.toString() + "\u00B0"
                              : "در حال بارگذاری",
                          style: const TextStyle(
                            color: Colors.black87,
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Padding(
                          padding: EdgeInsets.only(top: 10),
                          child: currently != null
                              ? _getWeatherImage(currently)
                              : Text("در حال بارگذاری"),
                        ),
                      ]),
                ),
              ),
            ],
          ),
          Expanded(
              child: Padding(
            padding: EdgeInsets.all(20),
            child: ListView(
              children: [
                ListTile(
                  leading: const FaIcon(FontAwesomeIcons.thermometerHalf),
                  title: Text(
                    "Tempreture:",
                    style: TextStyle(),
                  ),
                  trailing: Text(temp != null
                      ? temp.toString() + "\u00B0"
                      : "در حال بارگذاری"),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.cloud),
                  title: Text(
                    "Weather:",
                    style: TextStyle(),
                  ),
                  trailing: Text(discription != null
                      ? discription.toString()
                      : "در حال بارگذاری"),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.sun),
                  title: Text(
                    "temperature humidity:",
                    style: TextStyle(),
                  ),
                  trailing: Text(humidity != null
                      ? humidity.toString()
                      : "در حال بارگذاری"),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.wind),
                  title: Text(
                    "Wind Speed:",
                    style: TextStyle(),
                  ),
                  trailing: Text(windspeed != null
                      ? windspeed.toString()
                      : "در حال بارگذاری"),
                ),
              ],
            ),
          ))
        ],
      ),
      bottomNavigationBar: CurvedNavigationBar(
        backgroundColor: const Color.fromARGB(255, 221, 244, 255),
        color: const Color.fromARGB(255, 104, 166, 169),
        height: 50,
        animationDuration: const Duration(milliseconds: 500),
        onTap: (index) {
          if (index == 0) {
            Navigator.pop(context);
            //  SIngOutCheck = 0;
          }
          if (index == 1) {
            getWeather();
            //  SIngOutCheck = 0;
            Fluttertoast.showToast(
                msg: "بارگذاری اطلاعات جدید..",
                toastLength: Toast.LENGTH_SHORT,
                gravity: ToastGravity.SNACKBAR,
                timeInSecForIosWeb: 1,
                backgroundColor: Color.fromARGB(255, 255, 255, 255),
                textColor: Color.fromARGB(255, 0, 0, 0),
                fontSize: 16.0);
          }
        },
        items: const [
          Icon(Icons.last_page, color: Color.fromARGB(255, 221, 244, 255)),
          Icon(Icons.refresh, color: Color.fromARGB(255, 221, 244, 255)),
        ],
      ),
    );
  }
}
