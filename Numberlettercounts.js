public class LetterCount {

    public LetterCount() {
        int bir to dokuz = "bir, iki, üç, dört, beş,altı, yedi, sekiz, dokuz".length();
        int on to ondokuz = "on, on bir, on iki, on üç, on dört, on beş, on altı, on yedi, on sekiz, on dokuz".length();
        int ve = "ve".length();
        int yirmi to doksan = "yirmi, otuz, kırk,elli, altmış,yetmiş,seksen, doksan".length();
        int yüz = "yüz".length();
        int bin = "bin".length();
        count = "bir".length() + bir + 
          900*yüz + 100*1 to 9 + 
          100*20 to 90 + 891*and + 
          80*1 to 9 + 10*(1 to 9 + 10 to 19);
    }
 
    int count;
    
    int getCount(){return count;}
    
    public static void main(String[] args) {
        System.out.println(new LetterCount().getCount());
    }
}
