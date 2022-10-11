
class login{

    fun login():Boolean{
        while (true){
            System.out.println("请输入密码：")
            val In : Scanner = Scanner(System.`in`)
            val enterpass: Int = In.nextInt()
        if (enterpass==Password){
            return true
            break

        }else{
            totaltime--
            if (totaltime == 0){
                System.out.println("由于输入密码多次出错，该账号已冻结，想解冻请到银行柜台办理")
                return false
                break
            }else{
                System.out.println("输入密码错误，还有$totaltime 次机会")
            }


        }

        }

    }

}

import java.util.*

class home{
    fun home(){
        var istrue: Boolean = login().login()
        while (istrue){
        println("*****************************")
        println("   欢迎来到胡氏银行   ")
        println("*****************************")
        println("请选择你要进行的操作：")
        println("***********************")
        println("***********************")
        println("***********************")
        println("1.存款")
        println("2.取款")
        println("3.查询余额")
        println("4.修改密码")
        println("5.退出使用")
        val tag: Scanner = Scanner(System.`in`)
        var i: Int = tag.nextInt()
        if (i==1) {
            save()
        }
        if (i==2){
            wiithdraw()
        }
        if (i==3) {
            inquiry()
        }
        if (i==4){
            changepwd()
        }
        if(i==5){
            exit()
            break

        }
    }

}
}
