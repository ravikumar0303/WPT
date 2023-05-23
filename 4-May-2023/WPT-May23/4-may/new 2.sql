drop function if exists sum1;
delimiter $
create function sum1(_id int) returns int
BEGIN
	declare x int default 0;
	select sum(sal) into x from emp where deptno=_id;
	return x;

end $
delimiter ;
