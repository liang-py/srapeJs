from shutil import copyfile

huancunlx = "C:/Users/ELIAN-JSJ-505/Desktop/bat/lx/"
huancunlogin = "C:/Users/ELIAN-JSJ-505/Desktop/bat/lxlogin/"

zhenshilogin = r"D:\WorkProject\采集_流向\scm\scm\login\lxlogin"
zhenshilx = r"D:\WorkProject\采集_流向\scm\scm\spiders\lx"

ceshilogin = r"D:\WorkProject\lxspider\lxspider\scm\scm\login\lxlogin"
ceshilx = r"D:\WorkProject\lxspider\lxspider\scm\scm\spiders\lx"

gitlogin = "C:/Users/ELIAN-JSJ-505/PycharmProjects/GitFile/docker_true/采集_流向/代码采集流向更新/scm/scm/login/lxlogin/"
gitlx = "C:/Users/ELIAN-JSJ-505/PycharmProjects/GitFile/docker_true/采集_流向/代码采集流向更新/scm/scm/spiders/lx/"


import os


def file_copy(project_path, copyProjectPath, file_lists, mode, copy_space):
    login_path = os.path.join(project_path, 'scm\scm\login\lxlogin')
    spider_path = os.path.join(project_path, 'scm\scm\spiders\lx')
    copy_login_path = os.path.join(copyProjectPath, 'scm\scm\login\lxlogin')
    copy_spider_path = os.path.join(copyProjectPath, 'scm\scm\spiders\lx')
    if not mode:
        login_path = os.path.join(copyProjectPath, 'scm\scm\login\lxlogin')
        spider_path = os.path.join(copyProjectPath, 'scm\scm\spiders\lx')
        copy_login_path = os.path.join(project_path, 'scm\scm\login\lxlogin')
        copy_spider_path = os.path.join(project_path, 'scm\scm\spiders\lx')

    for p in file_lists:
        if copy_space == 'all':
            copyfile(os.path.join(spider_path, f"lx{p}.py"), os.path.join(copy_spider_path, f"lx{p}.py"))
            copyfile(os.path.join(login_path, f"lx{p}.py"), os.path.join(copy_login_path, f"lx{p}.py"))
        elif copy_space == 'login':
            copyfile(os.path.join(login_path, f"lx{p}.py"), os.path.join(copy_login_path, f"lx{p}.py"))
        elif copy_space == 'spider':
            copyfile(os.path.join(spider_path, f"lx{p}.py"), os.path.join(copy_spider_path, f"lx{p}.py"))


if __name__ == '__main__':
    # file_lists = ["0271","0276","0284","0458","0453"]
    file_lists = ["0211"]
    # 从本地到git, mode=1
    file_copy(r"D:\WorkProject\lxspider\lxspider", r"D:\WorkProject\采集_流向", file_lists, mode=1, copy_space='all')
    # 从运维路径到git
    # file_copy(r"D:\WorkProject\流向采集 - 副本\流向采集-运维", r"D:\WorkProject\采集_流向", file_lists, mode=1)
    # # 从运维到本地
    # file_copy(r"D:\WorkProject\流向采集 - 副本\流向采集-运维", r"D:\WorkProject\lxspider\lxspider", file_lists, mode=1)
    # 从git到正式
    # file_copy(r"D:\WorkProject\采集_流向", r"D:\WorkProject\lxspider_true", file_lists, mode=0)

    # file_copy(r"D:\WorkProject\流向采集 - 副本\流向采集-运维", r"D:\WorkProject\lxspider_true", file_lists, mode=1)
    # file_copy(r"D:\WorkProject\lxspider\lxspider", r"D:\WorkProject\lxspider_true", file_lists, mode=1)

